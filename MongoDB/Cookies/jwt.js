const express = require('express');
const app = express();
const jwt = require('jwt');
const cookieParser = require('cookie-parser');

app.get("/", function(req,res) {
    let token = jwt.sign({email: "naman123@gmail.com"}, "secret");
    res.cookie("token", token);
    res.send("done")
   })

app.get("/read",  function (req, res) {
    let data = jwt.verify(req.cookies.token, "secret");
    console.log(data);
})

app.listen(3000);
