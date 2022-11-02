package com.garate.upload.utility;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.HashMap;


public class Report {

    String id;
    String modified;
    String date;
    String time;

    HashMap<String, String> coveredApis;

    String locationPath;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getModified() {
        return modified;
    }

    public void setModified(String modified) {
        this.modified = modified;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public void setDateAndTimeFromModifiedTs(){
        DateTimeFormatter formatDateTime = DateTimeFormatter.ofPattern("yyyyMMddHHmmssSSS");
        LocalDateTime localDateTime = LocalDateTime.from(formatDateTime.parse(this.modified));
        this.date =  localDateTime.getDayOfMonth() + "-" + localDateTime.getMonth() + "-" + localDateTime.getYear();
        this.time = localDateTime.getHour() + ":" + localDateTime.getMinute();
    }

    public Long getLongModifiedDate(){
        return Long.parseLong(this.modified);
    }

    public static Report builder(String id, String modified){
        Report report = new Report();
        report.setId(id);
        report.setModified(modified);
        return report;
    }

        public Timestamp getModifiedTimeStamp(){
            DateTimeFormatter formatDateTime = DateTimeFormatter.ofPattern("yyyyMMddHHmmssSSS");
            LocalDateTime localDateTime = LocalDateTime.from(formatDateTime.parse(this.getModified()));
            return Timestamp.valueOf(localDateTime);
        }

        public static Timestamp getModifiedTimeStamp(String timeStamp){
            DateTimeFormatter formatDateTime = DateTimeFormatter.ofPattern("yyyyMMddHHmmssSSS");
            LocalDateTime localDateTime = LocalDateTime.from(formatDateTime.parse(timeStamp));
            return Timestamp.valueOf(localDateTime);
        }

        public static boolean isLatestTimeStamp(Timestamp compareWithTs, Timestamp compareToTs){
            return compareWithTs.after(compareToTs);
        }
}
