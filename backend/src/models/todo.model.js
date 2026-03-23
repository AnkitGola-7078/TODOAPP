import { timeStamp } from 'console';
import mongoose from 'mongoose';

const todoSchema=mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    }

})
module.exports=mongoose.model("Todo",todoSchema); 