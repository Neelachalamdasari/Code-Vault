require('dotenv').config(); // <--- ADD THIS LINE AT THE TOP
const AWS = require("aws-sdk");

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

const s3 = new AWS.S3();
const S3_BUCKET = process.env.AWS_BUCKET_NAME;

console.log("Bucket Loaded as:", S3_BUCKET); // To verify it works

module.exports = { s3, S3_BUCKET };