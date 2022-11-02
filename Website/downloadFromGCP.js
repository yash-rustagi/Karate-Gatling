/**
 * TODO(developer): Uncomment the following lines before running the sample.
 */

// The ID of your GCS bucket
const destFileName = process.env.USERPROFILE + "/Downloads/"
const bucketName = 'gatling-reports-demo';
const fileName = 'reportList.json';
const {Storage} = require('@google-cloud/storage');
const storage = new Storage({keyFilename: "intense-crow.json"});

async function downloadIntoMemory() {
    const contents = await storage.bucket(bucketName).file(fileName).download();
    console.log(contents.toString());
  return JSON.parse(contents.toString());
}

// module.exports = downloadIntoMemory
downloadIntoMemory().then().catch(console.error)