package com.garate.upload.utility;
// [START storage_create_bucket]
import com.google.api.gax.paging.Page;
import com.google.auth.Credentials;
import com.google.auth.oauth2.GoogleCredentials;
import com.google.cloud.storage.*;
import com.google.gson.Gson;

import java.io.*;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.Properties;

public class GoogleCloudUtility {
    private final String projectId;
    private final String bucketName;
    private final String gCpKeyFileName;
    private final Credentials credentials;
    private final Storage storage;
    private final String reportListFile;
    private final String localReportsPath;
    private final ReportList gCpReportList;
    private final Report latestLocalReportFolder;

    /**
     * Constructor: Creates Connection to GCP Storage using GCP properties in the corresponding properties file.
     * Initializes the final values utilized for GCP integration.
     * @throws Exception
     */
    public GoogleCloudUtility() throws Exception {
        Properties prop;
        try {
            InputStream stream = new FileInputStream("gcp.properties");
            prop = new Properties();
            prop.load(stream);
            this.gCpKeyFileName = prop.getProperty("connectionKey");
            this.bucketName = prop.getProperty("bucketName");
            this.projectId = prop.getProperty("projectId");
            this.reportListFile = prop.getProperty("reportListFile");
            this.localReportsPath = prop.getProperty("pathToReports");
        }catch (IOException e){
            e.printStackTrace();
            throw e;
        }

        if (this.gCpKeyFileName!=null){
            this.credentials = GoogleCredentials.fromStream(new FileInputStream(gCpKeyFileName));
        }else {
            throw new Exception("GCP Key File Name Missing");
        }

        if (this.credentials!=null){
            this.storage = StorageOptions.newBuilder().setCredentials(this.credentials).setProjectId(this.projectId).build().getService();
        }else {
            throw new Exception("Storage Missing for the Project Check GCP Settings");
        }

        if(!doesBucketExists()){
            this.storage.create(BucketInfo.newBuilder(this.bucketName).build());
        }
        this.gCpReportList = this.readReportListJson();
        this.latestLocalReportFolder = this.getLatestLocalReportFolder();
    }

    /**
     * Checks if the Bucket with particular name already exists in the project
     * @return
     */
    private boolean doesBucketExists() {
        Page<Bucket> bucketPage = this.storage.list();
        for (Bucket bucket: bucketPage.iterateAll()) {
            if (bucket.getName().equalsIgnoreCase(this.bucketName.trim())) {
                return true;
            }
        }
        return false;
    }

    /**
     * Uploads the latest created Report and all its sub-folders.
     * @return
     * @throws Exception
     */
    public boolean uploadLatestReport() throws Exception {

        if (this.gCpReportList.contains(this.latestLocalReportFolder)){
            throw new Exception("Report Folder with Name "+ this.latestLocalReportFolder.getId() + " Already Exists. Please run the Test create new Report.");
        }
        uploadFilesFromSubFolder(null);
        uploadFilesFromSubFolder("style");
        uploadFilesFromSubFolder("js");
        return true;
    }

    public boolean uploadLatestReportZip() throws Exception {
        if (this.gCpReportList.contains(this.latestLocalReportFolder)){
            throw new Exception("Report Folder with Name "+ this.latestLocalReportFolder.getId() + " Already Exists. Please run the Test create new Report.");
        }
        String zipPath = this.latestLocalReportFolder.getId()+"/" + this.latestLocalReportFolder.getId() + ".zip";
        FileUtilities.zipFolder(this.localReportsPath+"/"+ zipPath,this.localReportsPath+"/"+this.latestLocalReportFolder.getId());

        uploadFile(zipPath);
        return true;
    }

    /**
     * Uploads a single file to GCP storage
     * @param path is the relative path to results folder. The parent results folder is defined in the GCP properties file.
     */
    public void uploadFile(String path){
        String gcpPath = path;
        String localPath = this.localReportsPath + "/"+path;
        try {
            BlobId blobId = BlobId.of(this.bucketName, gcpPath);
            BlobInfo blobInfo = BlobInfo.newBuilder(blobId).build();
            storage.create(blobInfo, Files.readAllBytes(Path.of(localPath)));
        }catch (IOException e){
            e.printStackTrace();
        }
    }

    public void uploadContent(String contents, String path){

        try {
            BlobId blobId = BlobId.of(this.bucketName, path);
            BlobInfo blobInfo = BlobInfo.newBuilder(blobId).build();
            byte[] content = contents.getBytes(StandardCharsets.UTF_8);
            storage.createFrom(blobInfo, new ByteArrayInputStream(content));
        }catch (IOException e){
            e.printStackTrace();
        }
    }
    /**
     * Upload the content of a particular folder.
     * This DOES NOT upload sub-directories.
     * Please create a recursive implementation in case sub-directory upload is required.
     * @param folderToUpload is the relative path of the folder to results folder. The parent results folder is defined in the GCP properties file.
     */
    public void uploadFilesFromSubFolder(String folderToUpload) {
        String relativePath;
        if (folderToUpload==null){
            relativePath = this.latestLocalReportFolder.getId();
        }else{
            relativePath = this.latestLocalReportFolder.getId() + "/" + folderToUpload;
        }
        File styleFolder = new File(this.localReportsPath + "/" + relativePath );
        File[] subFiles = styleFolder.listFiles();
        ArrayList<String> paths = new ArrayList<>();
        for (File f: subFiles) {
            if (!f.isDirectory())
                paths.add(f.getName());
        }
        for (String path: paths) {
            uploadFile(relativePath + "/" + path);
        }
    }

    public ReportList readReportListJson(){
        try {
            byte[] content = this.storage.readAllBytes(this.bucketName, this.reportListFile);
            String fileListJson = new String(content, StandardCharsets.UTF_8);
            Gson gson = new Gson();
            ReportList reportList = gson.fromJson(fileListJson, ReportList.class);
            return reportList;
        }catch (Exception e){
            return new ReportList();
        }
    }

    public boolean addLastReportToReportList(){
        return this.gCpReportList.addReportToList(this.latestLocalReportFolder);
    }

    public boolean uploadReportListJson(){
        Gson gson = new Gson();
        String uploadJson = gson.toJson(this.gCpReportList);
        this.uploadContent(uploadJson,this.reportListFile);
        return true;
    }
    public Report getLatestLocalReportFolder(){
        File file = new File(this.localReportsPath);
        File[] directories = file.listFiles();
        Report tReport = new Report();
        for (File f: directories) {
            if (f.isDirectory()){
                String modified= getModifiedFromFileName(f.getName());
                String id = f.getName();
                if (tReport.getId()==null){
                    tReport.setId(id);
                    tReport.setModified(modified);
                    tReport.setDateAndTimeFromModifiedTs();
                }else{
                    if (Report.isLatestTimeStamp(Report.getModifiedTimeStamp(modified),tReport.getModifiedTimeStamp())){
                        tReport.setId(id);
                        tReport.setModified(modified);
                        tReport.setDateAndTimeFromModifiedTs();
                    }
                }
            }
        }
        return tReport;
    }

    private String getModifiedFromFileName(String f) {
        return f.substring(f.indexOf("-") + 1);
    }


}
