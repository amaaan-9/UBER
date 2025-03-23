const express = require('express');
const {body} = require('express-validator');
const router = express.Router();
const userController = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const { authUser } = require('../middlewares/auth.middleware');

router.post('/register',[
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({min:8}).withMessage('Password must be at least 8 characters long'),
    body('fullName.firstname').isLength({min:3}).withMessage('First name must be at least 3 characters long'),
    body('fullName.lastname').isLength({min:3}).withMessage('Last name must be at least 3 characters long'),
    body('isDriver').optional().isBoolean().withMessage('Invalid driver status'),
    
],
userController.registerUser
);
router.post('/login',[
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({min:8}).withMessage('Password must be at least 8 characters long'),
],
userController.logInUser
);
router.get('/profile',authUser,userController.getUserProfile);
router.get('/logout',authUser,userController.logOutUser);

module.exports = router;
