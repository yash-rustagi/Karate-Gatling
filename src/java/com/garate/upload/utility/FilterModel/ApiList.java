package com.garate.upload.utility.FilterModel;

public class ApiList {

    String parentReportID;
    String containedApi;
    String apiReportPath;

    public String getParentReportID() {
        return parentReportID;
    }

    public ApiList setParentReportID(String parentReportID) {
        this.parentReportID = parentReportID;
        return this;
    }

    public String getContainedApi() {
        return containedApi;
    }

    public ApiList setContainedApi(String containedApi) {
        this.containedApi = containedApi;
        return this;
    }

    public String getApiReportPath() {
        return apiReportPath;
    }

    public ApiList setApiReportPath(String apiReportPath) {
        this.apiReportPath = apiReportPath;
        return this;
    }
}
