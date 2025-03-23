const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const authMiddleware = require('../middlewares/auth.middleware');
const captainController = require('../controllers/captain.controller');


router.post('/register', [
    body('fullName.firstname').isLength({ min: 3 }).withMessage('First name must be at least 3 characters long'),
    body('fullName.lastname').isLength({ min: 3 }).withMessage('Last name must be at least 3 characters long'),
    body('email').isEmail().withMessage('Invalid email format'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    body('vehicle.color').isLength({ min: 3 }).withMessage('Color must be at least 3 characters long'),
    body('vehicle.plate').isLength({ min: 3 }).withMessage('Plate must be at least 3 characters long'),
    body('vehicle.capacity').isInt({ gt: 0 }).withMessage('Capacity must be a positive integer'),
    body('vehicle.vehicleType').isIn(['car', 'motorcycle', 'auto']).withMessage('Invalid vehicle type')
],
    captainController.registerCaptain
);
router.post('/login', [
    body('email').isEmail().withMessage('Invalid email format'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
],
    captainController.logInCaptain
);
router.get('/logout', authMiddleware.authCaptain, captainController.logOutCaptain);
router.get('/profile',authMiddleware.authCaptain ,captainController.getCaptainProfile);

module.exports = router;