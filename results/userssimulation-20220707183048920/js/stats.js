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
        "total": "168",
        "ok": "168",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "300",
        "ok": "300",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "248",
        "ok": "248",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "40",
        "ok": "40",
        "ko": "-"
    },
    "percentiles1": {
        "total": "261",
        "ok": "261",
        "ko": "-"
    },
    "percentiles2": {
        "total": "274",
        "ok": "274",
        "ko": "-"
    },
    "percentiles3": {
        "total": "296",
        "ok": "296",
        "ko": "-"
    },
    "percentiles4": {
        "total": "299",
        "ok": "299",
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
        "total": "3.333",
        "ok": "3.333",
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
        "total": "168",
        "ok": "168",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "296",
        "ok": "296",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "249",
        "ok": "249",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "38",
        "ok": "38",
        "ko": "-"
    },
    "percentiles1": {
        "total": "261",
        "ok": "261",
        "ko": "-"
    },
    "percentiles2": {
        "total": "272",
        "ok": "272",
        "ko": "-"
    },
    "percentiles3": {
        "total": "287",
        "ok": "287",
        "ko": "-"
    },
    "percentiles4": {
        "total": "294",
        "ok": "294",
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
        "total": "1.667",
        "ok": "1.667",
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
        "total": "174",
        "ok": "174",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "300",
        "ok": "300",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "247",
        "ok": "247",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "42",
        "ok": "42",
        "ko": "-"
    },
    "percentiles1": {
        "total": "260",
        "ok": "260",
        "ko": "-"
    },
    "percentiles2": {
        "total": "282",
        "ok": "282",
        "ko": "-"
    },
    "percentiles3": {
        "total": "295",
        "ok": "295",
        "ko": "-"
    },
    "percentiles4": {
        "total": "299",
        "ok": "299",
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
        "total": "1.667",
        "ok": "1.667",
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
