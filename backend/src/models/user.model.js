import mongoose from 'mongoose';
import bcrypt from "bcrypt";
const userSchema=new mongoose.Schema({
    username:{
       type:String,
       required:true
    },

    email:{
         type:String,
         required:true
    },
    password:{
        type:String,
        required:true
    }


},{timestamps:true})

// Hashing password before saving to database

userSchema.pre("save",async function(){
    this.password=await bcrypt.hash(this.password,10);
    
})

export const User=mongoose.model("User",userSchema)