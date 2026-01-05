import express from 'express';

import bcrypt  from 'bcryptjs';

import DBConnect from './DB/ConnectionDB.js';


const app =  express();

app.use(express.json());


// POST API URL
// http://localhost:5000/registration
//METH0D:POST


app.post("/registration",async(req,res)=>{

    const {username , useremail, userpass} = req.body;

    const Salt = await bcrypt.genSalt(10);

    var hashpass = await bcrypt.hash(userpass,Salt)

    var newUserData = {
        username,
        useremail,
        userpass: hashpass
    }

    
    return res.send(newUserData)
})


app.listen(5000,()=>{
    DBConnect();
    console.log("Server is running successfully")
})
