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
        "total": "158",
        "ok": "158",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "850",
        "ok": "850",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "452",
        "ok": "452",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "260",
        "ok": "260",
        "ko": "-"
    },
    "percentiles1": {
        "total": "268",
        "ok": "268",
        "ko": "-"
    },
    "percentiles2": {
        "total": "768",
        "ok": "768",
        "ko": "-"
    },
    "percentiles3": {
        "total": "843",
        "ok": "843",
        "ko": "-"
    },
    "percentiles4": {
        "total": "849",
        "ok": "849",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 15,
    "percentage": 75
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 5,
    "percentage": 25
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
        "total": "2.5",
        "ok": "2.5",
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
        "total": "247",
        "ok": "247",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "850",
        "ok": "850",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "653",
        "ok": "653",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "226",
        "ok": "226",
        "ko": "-"
    },
    "percentiles1": {
        "total": "779",
        "ok": "779",
        "ko": "-"
    },
    "percentiles2": {
        "total": "833",
        "ok": "833",
        "ko": "-"
    },
    "percentiles3": {
        "total": "847",
        "ok": "847",
        "ko": "-"
    },
    "percentiles4": {
        "total": "849",
        "ok": "849",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 5,
    "percentage": 50
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 5,
    "percentage": 50
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
        "total": "1.25",
        "ok": "1.25",
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
        "total": "158",
        "ok": "158",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "382",
        "ok": "382",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "250",
        "ok": "250",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "54",
        "ok": "54",
        "ko": "-"
    },
    "percentiles1": {
        "total": "252",
        "ok": "252",
        "ko": "-"
    },
    "percentiles2": {
        "total": "266",
        "ok": "266",
        "ko": "-"
    },
    "percentiles3": {
        "total": "331",
        "ok": "331",
        "ko": "-"
    },
    "percentiles4": {
        "total": "372",
        "ok": "372",
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
        "total": "1.25",
        "ok": "1.25",
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
