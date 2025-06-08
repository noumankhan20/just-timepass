import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    firstname:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        
    },
    lastname:{
        type:String,
        required:true
    },
    phone:{
        type:String,

    },
});
const User=mongoose.model("User",userSchema);

export default User;