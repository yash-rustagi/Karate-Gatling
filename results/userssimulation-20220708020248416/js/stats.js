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
        "total": "116",
        "ok": "116",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "498",
        "ok": "498",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "337",
        "ok": "337",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "129",
        "ok": "129",
        "ko": "-"
    },
    "percentiles1": {
        "total": "289",
        "ok": "289",
        "ko": "-"
    },
    "percentiles2": {
        "total": "480",
        "ok": "480",
        "ko": "-"
    },
    "percentiles3": {
        "total": "484",
        "ok": "484",
        "ko": "-"
    },
    "percentiles4": {
        "total": "495",
        "ok": "495",
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
        "total": "133",
        "ok": "133",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "498",
        "ok": "498",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "429",
        "ok": "429",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "114",
        "ok": "114",
        "ko": "-"
    },
    "percentiles1": {
        "total": "480",
        "ok": "480",
        "ko": "-"
    },
    "percentiles2": {
        "total": "481",
        "ok": "481",
        "ko": "-"
    },
    "percentiles3": {
        "total": "491",
        "ok": "491",
        "ko": "-"
    },
    "percentiles4": {
        "total": "497",
        "ok": "497",
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
        "total": "116",
        "ok": "116",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "330",
        "ok": "330",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "246",
        "ok": "246",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "59",
        "ok": "59",
        "ko": "-"
    },
    "percentiles1": {
        "total": "270",
        "ok": "270",
        "ko": "-"
    },
    "percentiles2": {
        "total": "281",
        "ok": "281",
        "ko": "-"
    },
    "percentiles3": {
        "total": "311",
        "ok": "311",
        "ko": "-"
    },
    "percentiles4": {
        "total": "326",
        "ok": "326",
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
