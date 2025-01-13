const express = require('express');
const app = express();

//route : youtube.com , google.com
//requestHandler: middleware
//req : request , res: response
//app.use: baar baar chalao
//app.get: ussi route pe chalao

app.use(express.json());  //use json to read ; -Makes blob readable
app.use(express.urlencoded({ extended: true})); //use x-www-form-urlencoded to read

app.use(function(req,res,next) {
    console.log('middleware chala');
    next();
});

app.use("/",function(req,res) {
    //console.log("Yo champ");
    res.send("Yo champ!")
});

app.get("/about", function(req, res){
    res.send("About page");

});

//Console pe
app.get("/profile", function(req, res, next){
    return next(new Error("Something went wrong"))

});


//Frontend pe dikhega
app.use((err,req, res, next) =>{
    console.error(err.stack)
    res.status(500).send("Something broke");

});

app.listen(3000);
