const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Import the User model

// Route to handle user login
router.post("/", async function(req, res) {
    try {
        const { username, password } = req.body;

        // Find user by username and password
        const user = await User.findOne({ username, password });

        if (user) {
            // User found, redirect to dashboard or send success response
            res.send({ message: "Login successful", user });
        } else {
            // User not found, send error response
            res.status(401).send({ message: "Invalid username or password" });
        }
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;