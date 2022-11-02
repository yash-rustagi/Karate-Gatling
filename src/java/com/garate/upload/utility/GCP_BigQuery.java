package com.garate.upload.utility;

import com.garate.upload.utility.FilterModel.ApiList;
import com.garate.upload.utility.FilterModel.ReportList;
import com.google.auth.oauth2.GoogleCredentials;
import com.google.cloud.bigquery.*;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Properties;

public class GCP_BigQuery {
    String reportListTableName;
    String apiListTableName;
    BigQuery bigQuery;
    private GoogleCredentials credentials;
    private String projectId;
    private String dataSetName;
    private Table reportListTable;
    private Table apiListTable;

    GCP_BigQuery() throws Exception {
        Properties bigqueryProp = this.readBigQueryProperties();
        this.credentials = GCP_Credentials.getInstance().getCredentials();
        this.bigQuery = BigQueryOptions
                .newBuilder()
                .setCredentials(this.credentials)
                .setProjectId(bigqueryProp.getProperty("projectId"))
                .build().getService();
    }

    private Properties readBigQueryProperties() throws IOException {
        InputStream stream = new FileInputStream("gcpBigQuery.properties");
        Properties properties = new Properties();
        properties.load(stream);
        this.reportListTableName = properties.getProperty("reportListTableName")==null?"reportListTable":properties.getProperty("reportListTableName");
        this.apiListTableName = properties.getProperty("apiListTableName")==null?"apiListTable":properties.getProperty("apiListTableName");
        this.dataSetName = properties.getProperty("dataSetName")==null?"Gatling_Report_Filters":properties.getProperty("dataSetName");
        this.projectId = properties.getProperty("projectId");
        return properties;
    }

    public boolean doTablesExist(){
        this.reportListTable =  this.bigQuery.getTable(TableId.of(this.projectId,this.dataSetName,this.reportListTableName));
        this.apiListTable = this.bigQuery.getTable(TableId.of(this.projectId,this.dataSetName,this.apiListTableName));
        if (this.reportListTable==null || this.apiListTable==null){
            return false;
        }else{
            return true;
        }
    }
    public BigQuery getBigQuery() {
        return bigQuery;
    }

    public void insertRows(ReportList reportRow, ArrayList<ApiList> apiList) throws Exception {
        HashMap<String, Object> rowContentReportList = new HashMap<>();
        for (Field field: ReportList.class.getDeclaredFields()) {
            field.setAccessible(true);
            rowContentReportList.put(field.getName(),field.get(reportRow));
        }


        ArrayList<HashMap<String, Object>> apiLists = new ArrayList<>();
        InsertAllRequest.Builder requestApiListBuilder = InsertAllRequest.newBuilder(this.apiListTable);
        for (ApiList api: apiList) {
            HashMap<String, Object> rowContentApiList = new HashMap<>();
            for (Field field: ApiList.class.getDeclaredFields()) {
                field.setAccessible(true);
                rowContentApiList.put(field.getName(),field.get(api));
            }
            requestApiListBuilder.addRow(rowContentApiList);
        }


        InsertAllRequest requestReport = InsertAllRequest.newBuilder(this.reportListTable).addRow(rowContentReportList).build();
        InsertAllRequest apiInsertRequest = requestApiListBuilder.build();

        InsertAllResponse responseReport = this.bigQuery.insertAll(requestReport);
        if (responseReport.getInsertErrors().size()>0){
            throw new Exception("Could Not Insert Rows to the Bigquery store for this execution" + "\n" + responseReport.getInsertErrors().toString());
        }
        InsertAllResponse responseApiList = this.bigQuery.insertAll(apiInsertRequest);
        if (responseApiList.getInsertErrors().size()>0){
            throw new Exception("Could Not Insert Rows to the Bigquery store for this execution" + "\n" + responseApiList.getInsertErrors().toString());
        }


    }

    public static void main(String[] args) throws Exception {
        GCP_BigQuery gcp_bigQuery = new GCP_BigQuery();
        System.out.println(gcp_bigQuery.doTablesExist());
        ReportList reportList = new ReportList();
        reportList.setDate("2022-10-01")
                .setModified("ModifiedDateString")
                .setReportId("Report1")
                .setLocationPath("LocationPath1")
                .setTime(null);
        ApiList apiList = new ApiList();
        apiList.setContainedApi("Api")
                .setApiReportPath("LocationApi1")
                .setParentReportID("Report1");

        ArrayList<ApiList> lists = new ArrayList<>();
        lists.add(apiList);

        gcp_bigQuery.insertRows(reportList,lists);
    }
}
