const express = require('express');
const router = express.Router()
const User = require('../Model/User')
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const libjwt = require('jsonwebtoken');
const Secrate_key = "MynameisEndtoEndYouTubeChannel$#"


router.post('/loginuser', [
    // Validate email  field

    body('email')
        .notEmpty().withMessage('Email is required')
        .isEmail().withMessage('Invalid email')
        .custom(value => {

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

    const email = req.body.email

    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {

        const userdata = await User.findOne({ email })
        if (!userdata) {
            return res.status(400).json({ error: "Invalid Crendential Plz try Again" })
        }

        const passwordcompare = bcrypt.compare(req.body.password, userdata.password)

        if (!passwordcompare) {
            return res.status(400).json({ error: "Invalid Crendential Plz try Again" })
        }

        const data = {
            User: userdata.id
        }
        const Authorizationtoken = libjwt.sign(data, Secrate_key)
        return res.status(200).json({ success: true, Authorizationtoken: Authorizationtoken })

    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: error.message });
    }
});

module.exports = router;
