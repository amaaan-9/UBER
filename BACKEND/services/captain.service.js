 const captainModel = require('../models/captain.model');

module.exports.registerCaptain = async ({firstname, lastname, email, password, vehicle})=>{
    if(!firstname || !lastname || !email || !password || !vehicle){
        throw new Error('All fields are required');
    }
    const captain = captainModel.create({
        fullName:{
            firstname,
            lastname
        },
        email,
        password,
        vehicle:{
            color,
            plate,
            capacity,
            vehicleType
        }
        
    })
    return captain;
};
