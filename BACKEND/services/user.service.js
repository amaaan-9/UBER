const userModel = require('../models/user.model');

module.exports.createUser = async({fullName,email,password,isDriver})=>{
    if(!fullName || !email || !password){
        throw new Error('All fields are required');
    }
    const user = await userModel.create({fullName:{firstname,lastname},email,password,isDriver});
    return user;
}
