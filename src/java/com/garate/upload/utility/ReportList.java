package com.garate.upload.utility;

import java.util.ArrayList;

public class ReportList {
    ArrayList<Report> report;

    public ArrayList<Report> getReport() {
        if (this.report ==null){
            this.report = new ArrayList<>();
        }
        return report;
    }

    public void setReport(ArrayList<Report> report) {
        this.report = report;
    }

    public boolean contains(Report latestLocalReportFolder) {
        if (this.report ==null){
            return false;
        }
        for (Report report: this.report) {
            if (
                    report.getId().equalsIgnoreCase(latestLocalReportFolder.getId()) &&
                    report.getModified().equalsIgnoreCase(latestLocalReportFolder.getModified())
            ){
                return true;
            }
        }
        return false;
    }

    public boolean addReportToList(Report report){
        return getReport().add(report);
    }
}
