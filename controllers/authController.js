import User  from "../models/userModel.js";

export const signUp = async (req, res)=>{
    try{
        const user = await User.create(req.body)
        res.status(201).json({user})
        console.log(user)

    }
    catch(err){
        console.log(err)

    }

}

export const logIn = async (req, res)=>{
    const { email, password} = req.body

    try{
        const user = await User.login(email, password)
        res.status(200).json({user})
        console.log(user)

    }
    catch(err){
        console.log(err)

    }

}