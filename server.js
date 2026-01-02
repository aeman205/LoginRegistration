import express from 'express';

import bcrypt  from 'bcryptjs';


const app =  express();

app.use(express.json());



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
    console.log("Server is running successfully")
})