// routes/driverRoutes.js

const express = require('express');
const router = express.Router();
const Driver = require('../models/Driver');

// POST /api/drivers/signup
router.post('/public/driversPage', async (req, res) => {
    try {
        const driver = await Driver.create(req.body);
        res.status(201).json({ driver });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
