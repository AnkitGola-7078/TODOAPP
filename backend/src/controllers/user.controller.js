import { User } from "../models/user.model.js";

const registerUser = async (req, res) => {
    try {
        const { username, password,email } = req.body;
    
        if([username,password,email].some(i => i?.trim() === "")){
             return res.status(400).send("All fields are required");
        }
    
        
        const userExist=await User.findOne({email});
        if(userExist){
            return res.status(400).send("User with this email already exists");
        }
        
        console.log("first")
        const user = await User.create({username,password,email});

        console.log(user)
        
        return res.status(201).json({
            message : "User register successfully",
            data : user
        })
    } catch (error) {
        console.log(error);
    }
}   

const loginUser =async (req, res) => {
    try {
        const { email, password } = req.body;
    
        if(!email && !password){
            return res.status(400).send("Email and password are required");
        }
    
       const user= await User.findOne({ $or :[{email},{password}]});
    
       if(!user){
        return res.status(400).send("Invalid email or password");
       }
    
       res.send(`User ${user.username} logged in successfully`);
    } catch (error) {
        console.log(error.message);
    }
}

const logoutUser = async (req , res)=>{

}

export { registerUser, loginUser, logoutUser };
