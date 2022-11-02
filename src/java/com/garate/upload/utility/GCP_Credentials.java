package com.garate.upload.utility;

import com.google.auth.oauth2.GoogleCredentials;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

public class GCP_Credentials {

    private String gCpKeyFileName;
    private String bucketName;
    private String projectId;
    private String reportListFile;
    private String localReportsPath;
    private GoogleCredentials credentials;

    public static GCP_Credentials getInstance() throws Exception {
        Properties prop;
        GCP_Credentials credentials = new GCP_Credentials();
        try {
            InputStream stream = new FileInputStream("gcp.properties");
            prop = new Properties();
            prop.load(stream);
            credentials.gCpKeyFileName = prop.getProperty("connectionKey");
        }catch (IOException e){
            e.printStackTrace();
            throw e;
        }

        if (credentials.gCpKeyFileName!=null){
            credentials.credentials = GoogleCredentials.fromStream(new FileInputStream(credentials.gCpKeyFileName));
        }else {
            throw new Exception("GCP Key File Name Missing");
        }

        return credentials;
    }

    public GoogleCredentials getCredentials() {
        return credentials;
    }
}
