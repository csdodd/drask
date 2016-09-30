var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/';
var port = process.env.PORT || 3000;

router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

app.use('/css', express.static(__dirname + '/css'));
app.use('/img', express.static(__dirname + '/img'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/ext_js', express.static(__dirname + '/ext_js'));
app.use('/models', express.static(__dirname + '/models'));
app.use('/media', express.static(__dirname + '/media'));

app.use("/",router);

app.use("*",function(req,res){
    console.log("Failed: " + req.originalUrl);
});

app.listen(port, function(){
  console.log("Live at Port " + port);
});
