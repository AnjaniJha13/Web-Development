const cookieParser = require('cookie-parser'); //setting cookie
const express = require('express');
const app = express();

app.get("/", function(req,res) {
    res.cookie("name", "Namanapp.get("/", function (req, res) ");
    res.send("done");
   });

app.listen(3000);
















