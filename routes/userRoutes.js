// routes/userRoutes.js

const express = require('express');
const router = express.Router();
const User = require('../models/User');

// POST /api/users/signup
router.post('/public/signUP', async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json({ user });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
