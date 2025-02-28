import { User } from "../models/user.model.js"
export const register=async(req ,res)=>{
    try{
        const {name,email,password}=req.body
        if(!name||!email||!password){
            return res.status(400).json({
                success:false,
                message:"All fields are required"})
        }

        const user=await User.findOne({email})
        if(user){
            return res.status(400).json({
                success:flase,
                message:"User already exists with this email"

            })
        }

        const hashedPassword=await  bcrypt.hash(password,10)
        await user.create({
            name,
            email,
            password:hashedPassword
        })
        return res.status(201).json({
            message:true,
            message:"User created successfully"
        })
    } catch(error){
        console.log(error)
        return res.status(500).json({message:"Failed to register user"})
    }
}

