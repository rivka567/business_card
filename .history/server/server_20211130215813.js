// const express = require("express");
// const mongoose = require("mongoose");
// //const Router = require("./routes")

// const app = express();

// app.use(express.json());


// const username = "rivka";
// const password = "1234";
// const cluster = "cluster0.cdd8z";
// const dbname = "BussinessCardDB";

// mongoose.connect(
//   `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`, 
//   {
//     useNewUrlParser: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true
//   }
// );

// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error: "));
// db.once("open", function () {
//   console.log("Connected successfully");
// });

//app.use(Router);

// app.listen(3000, () => {
//   console.log("Server is running at port 3000");
// });








const express = require('express');
const app = express();
const bodyParser = require("body-parser");
port = 3000;
const  multipart  =  require('connect-multiparty');
const  multipartMiddleware  =  multipart({ uploadDir:  './uploads' });

const upload = require('./file-upload');

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const AWS = require('aws-sdk');
const Busboy = require('busboy');


const username = "rivka";
const password = "1234";
const cluster = "cluster0.cdd8z";
const dbname = "BussinessCardDB";

mongoose.connect(
  `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`, 
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  }
);

// mongoose.connect('mongodb://rivka:1234@cluster0.cdd8z.mongodb.net/BussinessCardDB?retryWrites=true&w=majority',
//   {
//     useNewUrlParser: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true
//   }
// );

// mongoose.connect('mongodb://localhost:27017/BussinessCardDB',
//   {
//     useNewUrlParser: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true
//   }
// );

// const username = "rivka";
// const password = "1234";
// const cluster = "cluster0.cdd8z.mongodb.net";
// const dbname = "BussinessCardDB";


//mongodb://localhost:27017/BussinessCardDB'
 //mongoose.connect('mongodb://localhost:27017/BussinessCardDB', {useNewUrlParser: true, useUnifiedTopology: true});
// mongoose.connect(
//   `mongodb://${username}:${password}@${cluster}/${dbname}?retryWrites=true&w=majority`,
 // 'mongodb+srv://<username>:<password>@<cluster>/<dbname>?retryWrites=true&w=majority',
   //`mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`, 
//   {
//     useNewUrlParser: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true,
//   }
// ); 
 
    // const uri = `mongodb://127.0.0.1:27017/BussinessCardDB`;
    //  mongoose.connect(uri, {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    //   useFindAndModify: false,
    //   useCreateIndex: true,
    //   user: process.env.MONGO_USERNAME,
    //   pass: process.env.MONGO_PASSWORD,
    // });
   // console.log("Database connection completed successfully");
 


  // var db = mongoose.connection;
  // db.on('error', console.error.bind(console, 'connection error:'));
  // db.once('open', function() {
  //   console.log('connect')         
  // });

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


//    app.post('/api/v1/upload', upload.array('image', 1), (req, res) => {
//      console.log('api/v1')
  //  console.log(req.file)
  /* This will be th 8e response sent from the backend to the frontend */
//  let userId=(req.body.array.userId).replace('"','').replace('"','')
// let url="https://bussiness-card.s3.us-east-2.amazonaws.com/"+req.file
// console.log(url)
// UserModel.findByIdAndUpdate(userId,{
//   'ProfileImage':'https://bussiness-card.s3.us-east-2.amazonaws.com/{req.file}'
// },function (res, err) {
//   if (res){
//     res.send({ image: req.file });
//   }
//   if(err){
//       console.log(err);
//   }
// });

  //   res.send({ image: req.file });

  //  });

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
  
//   app.post('/api/upload', multipartMiddleware, (req, res) => {
//     res.json({
//          'message': 'File uploaded successfully'
//     });
//   });
  

app.post('/api/user', (req, res) => {
  debugger
  console.log('api/user')
  var myData = new UserModel({
  'password':req.body.user.password,'firstName':req.body.user.firstName,'lastName':req.body.user.lastName,'email':req.body.user.email,'phone':req.body.user.phone
});
console.log(myData);
  myData.save()
    .then(item => {
      console.log("ok")
      res.status(200).send(item._id);
    })
    .catch(err => {
      console.log("not ok")
      res.status(400).send("unable to save to database");
    });
}
);

// app.post('/api/userLinks', (req, res) => {

// let userLinks=req.body.array.userLinks;
// let userId=(req.body.array.userId).replace('"','').replace('"','')

// UserModel.findByIdAndUpdate(userId,{
//   facebookURL:userLinks.facebook, instagramURL:userLinks.instagram,
//   linkedInURL:userLinks.linkedIn, gitHubURL:userLinks.gitHub
// },function (res, err) {
//   if (res){
//       res.send(res)
//   }
//   if(err){
//       console.log(err);
//   }
// });

// });



// //work
// app.get('/api/user',(req,res)=>{
//   console.log(req.query.id)
//   UserModel.findById(req.query.id,function(err,result)
//     {
//       console.log(result)
//     res.json(result)
//     }
//     );
//   });

// //UserModel.update


// app.get('/api/users', (req, res) => {
//  UserModel.find({},function(err,result)
//   {
//     console.log(result)
//     res.json(result);  
//   }
//   );
     
// });

// app.get('/api/upload', (req, res) => {
//   res.json({
//       'message': 'hello'
//   });
// });


app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});









  //app.post('/api/upload',multipartMiddleware, (req, res) => {
//   var myData = new ImageModel({
// path:req.body.formData
//   })
//   myData.save()
//     .then(item => {
//       res.json("item saved to database");
//     })
//     .catch(err => {
//       res.status(400).json("unable to save to database");
//     });
//}
//);