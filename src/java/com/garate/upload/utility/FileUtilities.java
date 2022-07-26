package com.garate.upload.utility;

import net.lingala.zip4j.ZipFile;
import net.lingala.zip4j.exception.ZipException;

import java.io.File;

public class FileUtilities {

    public static boolean zipFolder(String targetZip, String sourceFolder){
        try {
            ZipFile zipFile;
            if (targetZip.indexOf(".zip")>0) {
                zipFile = new ZipFile(targetZip);
            }else{
                zipFile = new ZipFile(targetZip + ".zip");
            }
            zipFile.addFolder(new File(sourceFolder));
            return true;
        }catch (Exception e){
            e.printStackTrace();
            return false;
        }
    }
}
