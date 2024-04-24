const express = require('express');
const router = express.Router()
const User = require('../Model/User')
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs')
const libJWT = require("jsonwebtoken")


router.post('/createuser', [
    // Validate name field
    body('name')
        .notEmpty().withMessage('Name is required'),

    body('email')
        .notEmpty().withMessage('Email is required')
        .isEmail().withMessage('Invalid email')
        .custom(value => {
            // Custom validation logic to further validate email
            // For example, check if the domain is from a specific provider
            if (!value.endsWith('@gmail.com')) {
                throw new Error('Email must be from example.com domain');
            }
            return true;
        }),

    // Validate password field
    body('password')
        .notEmpty().withMessage('Password is required')
        .isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
        .matches(/^(?=.*[A-Z])/).withMessage('Password must start with a capital letter')
], async (req, res) => {

    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const salt = await bcrypt.genSalt(10);
        const securePassword = await bcrypt.hash(req.body.password, salt);

        await User.create({
            name: req.body.name,
            password: securePassword,
            email: req.body.email,
            location: req.body.location
        });

        res.json({ success: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: error.message });
    }
});

module.exports = router;
