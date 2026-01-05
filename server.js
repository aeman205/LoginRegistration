import express from 'express';

import bcrypt  from 'bcryptjs';

import DBConnect from './DB/ConnectionDB.js';

import UserDataSchema from './Models/UserModel.js';


const app =  express();

app.use(express.json());


// POST API URL
// http://localhost:5000/registration
//METH0D:POST


app.post("/registration",async(req,res)=>{

    const {username , useremail, userpass} = req.body;

    const Salt = await bcrypt.genSalt(10);

    var hashpass = await bcrypt.hash(userpass,Salt)

    if(!username || !useremail || !userpass){
        return res.send("All Fields Are Required")
    }

    var newUserData = {
        username,
        useremail,
        userpass: hashpass
    }

    await UserDataSchema.create(newUserData)
    return res.send(newUserData)
})


// POST API URL
// http://localhost:5000/login
//METH0D:POST

    app.post("/login",async(req,res)=>{

    const {useremail, userpass} = req.body;

    if(!useremail || !userpass){
         return res.send("All Fields Are Required")
    }

    var UserAvail = await UserDataSchema.findById("695bd76435e488c62d31a016")

    return res.send(UserAvail)


})


app.listen(5000,()=>{
    DBConnect();
    console.log("Server is running successfully")
})
