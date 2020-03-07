var express = require("express");
var app = express();

var bodyParser = require("body-parser");
var mongoose = require("mongoose");
mongoose.connect("mongodb+srv://yuvraj-sharma:yuvraj1710@cluster0-ts0qv.mongodb.net/test?retryWrites=true&w=majority", {useNewUrlParser:true, useUnifiedTopology: true});
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));


var naariSchema =  new mongoose.Schema({
description : String,
phone : Number,
location : String
});
var Naari = mongoose.model("Naari" , naariSchema);
app.get("/" , function(req, res){
    res.render("index.ejs");
});
app.get("/complaint", function(req, res){
res.render("new.ejs");
});
app.post("/" , function(req , res){
    Naari.create(req.body.naari , function(err,newnaari){
        if(err){
            console.log("error");
        }
        else{
            
            res.render("success.ejs");
        }
    });
});
app.get("/example",function(req, res){
    res.render("example.ejs")
});
app.get("/about_us", function(req, res){
    res.render("about_us.ejs");
});
app.get("/contact", function(req, res){
    res.render("contact.ejs");
});
app.get("/noresponse", function(req, res){
    res.render("noresponse.ejs");
});
app.post("/noresponse" , function(req , res){
    Naari.create(req.body.naari , function(err,newnaari){
        if(err){
            console.log("error");
        }
        else{
            
            res.render("feedback.ejs");
        }
    });
});
app.listen(process.env.port|8080 , function(){
    console.log("server started");
});




