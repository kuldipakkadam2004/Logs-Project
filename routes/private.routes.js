const express = require('express');
const authMiddleware = require('../middleware/auth.middleware.js');

const router = express.Router();

//dashboard (accesstoken)
router.get('/dashboard', authMiddleware, (req, res) => {
    res.status(200).send({
        message: `Welcome to the dashboard ${req.user.name}`,
    });
});

module.exports = router;
