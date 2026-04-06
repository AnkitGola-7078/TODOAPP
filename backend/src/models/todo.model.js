import mongoose from "mongoose";
import { User } from "./user.model.js";

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  createdBy:[
    {
      type:mongoose.Schema.Types.ObjectId,
      ref:"User",
    
    }
  ]
});

const Todo = mongoose.model("Todo", todoSchema);

export default Todo;