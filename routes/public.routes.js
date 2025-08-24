const express = require('express');
const { generateToken } = require('../utils/token-utils.js');

const router = express.Router();

router.get('/generate-token', (req, res) => {
    const token = generateToken();

    res.status(200).send({
        message: "Token generated please save it for future use",
        token: token
    });
});

router.get('/', (req, res) => {
    res.status(200).send({
        message: "Welcome to the home page🏡"
    });
});

// Generate-token
// Home route

module.exports = router;