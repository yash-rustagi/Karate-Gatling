package com.garate.upload;


import com.garate.upload.utility.GoogleCloudUtility;

public class uploadFile {

    public static void main(String[] args) throws Exception {
        System.out.printf("%s \n %s \n","******************************", "Report Upload Started");
        GoogleCloudUtility utility = new GoogleCloudUtility();
        utility.uploadLatestReportZip();
        utility.addLastReportToReportList();
        utility.uploadReportListJson();
        System.out.printf("%s \n %s \n","Report Upload COMPLETED","******************************");
    }
}
