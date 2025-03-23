const userModel = require('../models/user.model');
const userService = require('../services/user.service');
const {validationResult} = require('express-validator');

module.exports.registerUser = async(req,res,next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    const {fullName,email,password,isDriver} = req.body;
    const hashedPassword = await userModel.hashPassword(password);
    const user = await userService.createUser({fullName:{firstname:fullName.firstname,lastname:fullName.lastname},email,password:hashedPassword,isDriver});
    const token = user.generateAuthToken();
    res.status(201).json({user,token});
} ;

module.exports.logInUser = async(req,res,next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    const {email,password} = req.body;
    const user = await userModel.findOne({email}).select('+password');
    if(!user){
        return res.status(401).json({error:'Invalid email or password'});
    }
    const isMatch = await user.comparePassword(password);
    if(!isMatch){
        return res.status(401).json({error:'Invalid email or password'});
    }
    const token = user.generateAuthToken();
    res.status(200).json({user,token});
}