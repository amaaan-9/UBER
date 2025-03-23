const captainModel = require('../models/captain.model');
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