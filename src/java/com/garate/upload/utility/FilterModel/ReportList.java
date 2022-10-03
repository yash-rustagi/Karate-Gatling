package com.garate.upload.utility.FilterModel;

public class ReportList {
    String reportId;
    String modified;
    String date;
    String Time;
    String locationPath;

    public String getReportId() {
        return reportId;
    }

    public ReportList setReportId(String reportId) {
        this.reportId = reportId;
        return this;
    }

    public String getModified() {
        return modified;
    }

    public ReportList setModified(String modified) {
        this.modified = modified;
        return this;
    }

    public String getDate() {
        return date;
    }

    public ReportList setDate(String date) {
        this.date = date;
        return this;
    }

    public String getTime() {
        return Time;
    }

    public ReportList setTime(String time) {
        Time = time;
        return this;
    }

    public String getLocationPath() {
        return locationPath;
    }

    public ReportList setLocationPath(String locationPath) {
        this.locationPath = locationPath;
        return this;
    }
}
