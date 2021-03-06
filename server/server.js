

const express = require('express');
const app = express();
const bodyParser = require("body-parser");
port = 3080;
const  multipart  =  require('connect-multiparty');
const  multipartMiddleware  =  multipart({ uploadDir:  './uploads' });

const upload = require('./file-upload');

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const AWS = require('aws-sdk');
const Busboy = require('busboy');

//connent to mongodb by mongoose
const username = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;
const cluster = process.env.MONGO_CLUSTER;
const dbname = process.env.MONGO_DB;

mongoose.connect(
  `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`, 
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});


  var UserSchema = new mongoose.Schema({
    password:String, firstName:String, lastName:String, email:String, phone:String, 
    facebookURL:String, instagramURL:String, linkedInURL:String, gitHubURL:String,
    ProfileImage:String
    //ImageShema ליצור מערך תמונות 
   });


  var UserModel = mongoose.model("users", UserSchema);
  UserModel.find

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 


 app.post('/api/v1/upload', upload.array('image', 1), (req, res) => {
 console.log('api/v1')
 console.log(req.file)
  /* This will be th 8e response sent from the backend to the frontend */
let userId=(req.body.array.userId).replace('"','').replace('"','')
let url="https://bussiness-card.s3.us-east-2.amazonaws.com/"+req.file
console.log(url)
UserModel.findByIdAndUpdate(userId,{
 'ProfileImage':'https://bussiness-card.s3.us-east-2.amazonaws.com/{req.file}'
},function (res, err) {
  if (res){
    res.send({ image: req.file });
  }
 if(err){
      console.log(err);
  }
});

 res.send({ image: req.file });
 });

// app.post('/api/uploadToS3', (req,file, res) => {
//   console.log('uploadToS3')
 

//   let s3bucket = new AWS.S3({
//     accessKeyId: IAM_USER_KEY,
//     secretAccessKey: IAM_USER_SECRET,
//     Bucket: BUCKET_NAME
//   });

//   console.log('req=',req.formdata.file);
  // console.log('file=',file);

  // s3bucket.createBucket(function () {
  //     var params = {
  //       Bucket: BUCKET_NAME,      
  //       Key: file.name,
  //       Body: file.data
  //     };
  //     console.log(params)

      // s3bucket.upload(params, function (err, data) {
      //   if (err) {
      //     console.log('error in callback');
      //     console.log(err);
      //   }
      //   console.log('success');
      //   console.log(data);
      // });
  // });
  
  // })
  
  app.post('/api/upload', multipartMiddleware, (req, res) => {
    res.json({
         'message': 'File uploaded successfully'
    });
  });
  

app.post('/api/user', (req, res) => {
  debugger
  console.log('api/user')
  var myData = new UserModel({
  'password':req.body.user.password,'firstName':req.body.user.firstName,'lastName':req.body.user.lastName,'email':req.body.user.email,'phone':req.body.user.phone
});
console.log(myData);
  myData.save()
    .then(item => {
      console.log("add successfully")
      console.log(item._id)
      res.status(200).send(item._id);
    })
    .catch(err => {
      console.log("error")
      res.status(400).send("unable to save to database");
    });
}
);

  app.post('/api/userLinks', (req, res) => {

  let userLinks=req.body.array.userLinks;
  let userId=(req.body.array.userId).replace('"','').replace('"','')

UserModel.findByIdAndUpdate(userId,{
    facebookURL:userLinks.facebook, instagramURL:userLinks.instagram,
    linkedInURL:userLinks.linkedIn, gitHubURL:userLinks.gitHub
  }
  ,function (res, err) {
    if (res){
      console.log('res=')
        res.send(res)
    }
    if(err){
        console.log(err);
    }
  });

});



 //work
app.get('/api/user',(req,res)=>{
  console.log(req.query.id)
  UserModel.findById(req.query.id,function(err,result)
    {
      console.log(result)
    res.json(result)
    }
    );
  });

 //UserModel.update
app.get('/api/users', (req, res) => {
 UserModel.find({},function(err,result)
  {
    console.log(result)
    res.json(result);  
  }
  );
     
});


app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});






