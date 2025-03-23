const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports.authUser = async(req,res,next)=>{
    const token = req.cookies.token || req.headers.authorization.split(' ')[1];
    if(!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    const blacklistedToken = await blacklistTokenModel.findOne({
        token: token
    });
    if (blacklistedToken) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    // Verify the token
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await userModel.findById(decoded._id)
        return next();
    } catch (error) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    
}
