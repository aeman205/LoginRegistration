import mongoose from "mongoose";

const DBConnect = async()=>{

try{

    await mongoose.connect("mongodb+srv://admin:admin@rolebased.ukgimdq.mongodb.net/?appName=RoleBased");
    
    console.log("Mongo DB Connected Successfully")

}   catch(error){

    console.log(error)
}

}

export default DBConnect;