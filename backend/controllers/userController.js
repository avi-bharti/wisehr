import User from "../models/userModel.js";
import asyncHandler from "../middlewares/asyncHandler.js";
import generateToken from "../utils/jwt.js";

const registerUser = asyncHandler(async(req,res) => {
   const {name,email,password} = req.body;

   const existEmail = await User.findOne({email});
   if(existEmail){
      res.status(400);
      throw new Error(`User already exists`)
   }

   const user = await User.create({name,email,password})
   if(user){
      generateToken(res, user._id);
      res.status(201).json({
         _id: user._id,
         name: user.name,
         email: user.email
      })
   }else{
      res.status(400)
      throw new Error('Invalid user data')
   }

})

const loginUser = asyncHandler(async(req,res) => {
   const {email, password} = req.body;

   const user = await User.findOne({email});

   if(user && await user.matchPassword(password)){
      generateToken(res, user._id);
      res.status(201).json({
         _id: user._id,
         name: user.name,
         email: user.email
      })
   }else{
      res.status(400)
      throw new Error('Invalid user data')
   }
})

const logoutUser = asyncHandler(async(req,res) => {
   res.cookie('jwt', '', {
      httpOnly: true,
      maxAge: new Date(0)
   })
   res.status(200).json({message: 'Logged out successfully'})
})

const getUsers = asyncHandler(async(req,res) => {
   const users = await User.find();
   res.status(200).json(users);
})

export {
   registerUser,
   loginUser,
   logoutUser,
   getUsers
}