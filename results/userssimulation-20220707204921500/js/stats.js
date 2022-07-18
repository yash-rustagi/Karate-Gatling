var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "20",
        "ok": "20",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "124",
        "ok": "124",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "365",
        "ok": "365",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "236",
        "ok": "236",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "63",
        "ok": "63",
        "ko": "-"
    },
    "percentiles1": {
        "total": "241",
        "ok": "241",
        "ko": "-"
    },
    "percentiles2": {
        "total": "282",
        "ok": "282",
        "ko": "-"
    },
    "percentiles3": {
        "total": "306",
        "ok": "306",
        "ko": "-"
    },
    "percentiles4": {
        "total": "353",
        "ok": "353",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 20,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "4",
        "ok": "4",
        "ko": "-"
    }
},
contents: {
"req_get--users-2ea1c": {
        type: "REQUEST",
        name: "GET /users",
path: "GET /users",
pathFormatted: "req_get--users-2ea1c",
stats: {
    "name": "GET /users",
    "numberOfRequests": {
        "total": "10",
        "ok": "10",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "139",
        "ok": "139",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "303",
        "ok": "303",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "236",
        "ok": "236",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "52",
        "ok": "52",
        "ko": "-"
    },
    "percentiles1": {
        "total": "246",
        "ok": "246",
        "ko": "-"
    },
    "percentiles2": {
        "total": "279",
        "ok": "279",
        "ko": "-"
    },
    "percentiles3": {
        "total": "292",
        "ok": "292",
        "ko": "-"
    },
    "percentiles4": {
        "total": "301",
        "ok": "301",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 10,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2",
        "ok": "2",
        "ko": "-"
    }
}
    },"req_get--users-1-f32d1": {
        type: "REQUEST",
        name: "GET /users/1",
path: "GET /users/1",
pathFormatted: "req_get--users-1-f32d1",
stats: {
    "name": "GET /users/1",
    "numberOfRequests": {
        "total": "10",
        "ok": "10",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "124",
        "ok": "124",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "365",
        "ok": "365",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "235",
        "ok": "235",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "73",
        "ok": "73",
        "ko": "-"
    },
    "percentiles1": {
        "total": "237",
        "ok": "237",
        "ko": "-"
    },
    "percentiles2": {
        "total": "291",
        "ok": "291",
        "ko": "-"
    },
    "percentiles3": {
        "total": "333",
        "ok": "333",
        "ko": "-"
    },
    "percentiles4": {
        "total": "359",
        "ok": "359",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 10,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2",
        "ok": "2",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
