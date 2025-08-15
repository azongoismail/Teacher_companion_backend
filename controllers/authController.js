import User  from "../models/userModel.js";
import jwt from 'jsonwebtoken';


const maxAge = 3 * 24 * 60 * 60 ;
// const jwtSignature = process.env.JWT;
const createToken = (id)=>{
    return jwt.sign({id},'teacher secret', {expiresIn:maxAge})
}

export const signUp = async (req, res)=>{
    try{
        const user = await User.create(req.body)
        const token = createToken(user._id);
        res.cookie('jwt', token, {httpOnly:true, maxAge:maxAge * 1000 })
        res.status(201).json({user:user._id})
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
         const token = createToken(user._id);
        res.cookie('jwt', token, {httpOnly:true, maxAge:maxAge * 1000 })
        res.status(200).json({user:user._id})
        console.log(user)

    }
    catch(err){
        console.log(err)

    }

}


export const logOut = (req, res)=>{
    res.cookie('jwt', '', {maxAge:1});


}

export const get = (req, res)=>{
    res.send('hello world')

}