import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    index: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    index: true,
  },
  fullname: {
    type: String,
    required: true,
    trim: true,
    index: true,
  },
  avatar: {
    type: String,
    required: true, // cloudinary url
  },
  coverImage: {
    type: String, // optional
  },
  watchhistory: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Video',
    },
  ],
  password: {
    type: String,
    required: [true, 'Password is required'],
  },
  refreshToken: {
    type: String,
  },
}, {
  timestamps: true,
});

    //next as middlleware function
userSchema.pre("save",async function(next){//jb password bheje tbhi encrypt ktr vrna har bar save pr encrypt krdega
    if(!this.isModified("password")) 
        return next() //if password is not modified then no need to hash it direct return next
//if modfifed then hash
    this.password=bcrypt.hash(this.password,10)
    next()
})//kya hash krna thi.password aur kitne round to 10

userSchema.methods.isPasswordCorrect = async function(Password){
   return await bcrypt.compare(password,this.password)//check in background if passowr dand this.passsowrd is same
}

userSchema.methods.generateAccessToken = function(){//gnerate token for user
    jwt.sign({
        _id: this._id,
        email:this.email,//can put async here if took time
        fullname:this.fullname,

    },
    process.env.ACCESS_TOKEN_SECRET,
    {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY
    }
)}
userSchema.methods.generateRefreshToken = function(){
     jwt.sign({
        _id: this._id,

    },
    process.env.REFRESH_TOKEN_SECRET,
    {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRY
    })
}






export const User = mongoose.model('User', userSchema);