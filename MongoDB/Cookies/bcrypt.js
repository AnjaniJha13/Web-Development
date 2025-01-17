const express = require('express');
const app = express();
const bcrypt = require('bcrypt');


//app.get("/read", function (req, res) {
// bcrypt.genSalt(10, function(err,salt) {
//         bcrypt.hash("popo", salt, function(err , hash) {
//             //console.log(salt);
//             console.log(hash);

app.get("/", function (req, res) {
    bcrypt.compare("popo", "$2b$10$YAth1qf5V.eYE66wDbgP.uMUDnUxGIY/oq88PZbrpjM96W.FTCKj.", function (err, result) {
        console.log(result);
    });
})

app.listen(3000);
