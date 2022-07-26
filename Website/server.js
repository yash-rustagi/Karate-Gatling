const express = require('express');
const reportList = require('./reportList.json')
const app = express();
// const {downloadIntoMemory} = require('./downloadFromGCP')

app.set("view engine", "pug");

app.use(express.static(__dirname + "/public"));


const destFileName = process.env.USERPROFILE + "/Downloads/"
const bucketName = 'gatling-reports-demo';
const fileName = 'reportList.json';
const {Storage} = require('@google-cloud/storage');
const { json } = require('express');
const storage = new Storage({keyFilename: "intense-crow.json"});

async function downloadIntoMemory() {
    const contents = await storage.bucket(bucketName).file(fileName).download();
    // console.log(JSON.parse(contents.toString()));
  return JSON.parse(contents.toString());
}


  app.get("/", async(req, res) => {
    const reportList2 = await downloadIntoMemory()
    // console.log(reportList2)
    res.render("index", {
      title: "Gatling Report List Demo",
      reports: reportList2.report
    });
  });
  
const server = app.listen(7000, () => {
    console.log(`Express running → PORT ${server.address().port}`);
  });