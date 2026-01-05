
import mongoose from "mongoose";

const UserSchema = mongoose.Schema({


    username:{
        type:"String"
    },
    useremail:{
        type:"String",
        unique:true
    },
    userpass:{
        type:"String"
    }

})

var UserDataSchema = mongoose.model("User",UserSchema)

export default UserDataSchema;