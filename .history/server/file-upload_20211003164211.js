const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
const dotenv = require('dotenv');
dotenv.config();

aws.config.update({
 secretAccessKey:process.env.SECRET_ACCESS_KEY ,
 accessKeyId: process.env.,
 region: 'us-east-2' 
});


const s3 = new aws.S3();

/* In case you want to validate your file type */
const fileFilter = (req, file, cb) => {

  console.log('fileFilter')

 if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
  cb(null, true);
 } else {
  cb(new Error('Wrong file type, only upload JPEG and/or PNG !'), 
  false);
 }
};

const upload = multer({
fileFilter: fileFilter,
storage: multerS3({
 acl: 'public-read',
 s3,
 bucket: 'bussiness-card',
 key: function(req, file, cb) {

   console.log('multer')

   /*I'm using Date.now() to make sure my file has a unique name*/
   req.file = Date.now() + file.originalname;

   console.log('work')

   cb(null, Date.now() + file.originalname);
  console.log('work 2')

  }
 })
});

module.exports = upload;