import mongoose from "mongoose";
import validator from 'validator';
import bcrypt from 'bcrypt';


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type: String,
        unique:[true, 'please enter an email.'],
        required: true,
        validate: {
            validator: validator.isEmail,
            meessage: 'please provide a valid email address.'
        }

    }, 

    password: {
        type:String,
        required:[true, 'please enter a password'],
        minlength: [6, 'Minimum password length is 6 characters.']
    }

})


// fire a function b4 doc save to db & hash password
userSchema.pre('save', async function(next){
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
})

// static method to login user
userSchema.statics.login = async function (email, password) {
    const user = await this.findOne({email});
    if(user){
        const auth = await bcrypt.compare(password, user.password);
        if(auth){
            return user;
        }
        throw Error ('incorrect password')
    }
    throw Error ('incorrect email')
}

 const User = mongoose.model('user', userSchema);
 export default User;