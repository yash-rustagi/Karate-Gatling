package com.garate.upload.utility;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

public class GCP_Storage {

    private final String projectId;
    private final String bucketName;
    private final String reportListFile;
    private final String localReportsPath;

    private GCP_Storage(String projectId, String bucketName, String reportListFile, String localReportsPath) {
        this.projectId = projectId;
        this.bucketName = bucketName;
        this.reportListFile = reportListFile;
        this.localReportsPath = localReportsPath;
    }

    public static GCP_Storage getInstance() throws IOException {

        Properties storageProp = GCP_Storage.readStorageProperties();

        GCP_Storage gcp_storage = new GCP_Storage(
                storageProp.getProperty("bucketName"),
                storageProp.getProperty("projectId"),
                storageProp.getProperty("reportListFile"),
                storageProp.getProperty("pathToReports")
                );
        return gcp_storage;
    }

    private static Properties readStorageProperties() throws IOException {
        InputStream stream = new FileInputStream("gcpStorage.properties");
        Properties properties = new Properties();
        properties.load(stream);
        return properties;
    }

    public String getProjectId() {
        return projectId;
    }

    public String getBucketName() {
        return bucketName;
    }

    public String getReportListFile() {
        return reportListFile;
    }

    public String getLocalReportsPath() {
        return localReportsPath;
    }
}
