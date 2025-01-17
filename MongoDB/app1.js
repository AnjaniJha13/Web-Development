const express = require('express');
const app = express();

const userModel = require('./usermodel');

app.get('/',(req, res) => {
    res.send("hey");
})

/*app.get('/create',async (req, res) => {    //Asynchronuous code
    let createduser = await userModel.create({
        name: "Naman",
        email: "naman11@gmail.com",
        username: "Naman"
    })
    
    res.send(createduser);
}) */

app.get('/create',async (req, res) => {    //Asynchronuous code
        let createduser = await userModel.create({
            name: "Namita",
            email: "namita15@gmail.com",
            username: "Namita"
        })

        res.send(createduser);
    })

app.get('/update', async (req, res) => {    //Asynchronuous code
    let updateduser = await userModel.findOneAndUpdate({username: "Naman"}, {name:"Naman Ankush Sharma"}, {new: true}) 
    res.send(updateduser);
})

app.get("/read", async (req, res) => {
    let users = await userModel.findOne({username: "Naman"}); //findOne / find
    res.send(users);
})

app.get("/delete", async (req, res) => {
    let users = await userModel.findOneAndDelete({username: "Naman"});
    res.send(users);
})


app.listen(3000);

