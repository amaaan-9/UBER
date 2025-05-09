const captainModel = require('../models/captain.model');
const blacklistTokenModel = require('../models/blacklistToken.model');
const captainService = require('../services/captain.service');
const { validationResult } = require('express-validator');


module.exports.registerCaptain = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { firstname, lastname, email, password, vehicle } = req.body;

    const isCaptainExists = await captainModel.findOne({ email
    });

    if (isCaptainExists) {
        return res.status(400).json({ error: 'Captain already exists' });
    }


    const hashedPassword = await captainModel.hashPassword(password);
    const captain = await captainService.registerCaptain({ firstname, lastname, email, password: hashedPassword, vehicle });
    const token = captain.generateAuthToken();
    res.status(201).json({ captain, token });
}
module.exports.logInCaptain = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    const captain = await captainModel.findOne({ email }).select('+password');
    if (!captain) {
        return res.status(401).json({ error: 'Invalid email or password' });
    }
    const isMatch = await captain.comparePassword(password);
    if (!isMatch) {
        return res.status(401).json({ error: 'Invalid email or password' });
    }
    const token = captain.generateAuthToken();
    res.cookie('token', token);
    res.status(200).json({ captain, token });
}
module.exports.getCaptainProfile = async (req, res, next) => {
    res.status(200).json(req.captain);
}
module.exports.logOutCaptain = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    if (token) {
        await blacklistTokenModel.create({ token });
    }
    // Clear the cookie
    res.clearCookie('token');
    res.status(200).json({ message: 'Logged out successfully' });
}