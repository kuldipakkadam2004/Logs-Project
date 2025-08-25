const express = require('express');
const router = express.Router();

const { generateAndStoreToken } = require('../utils/token-utils.js');
router.get('/generate-token', (req, res) => {
    const userId=1;
    const token = generateAndStoreToken(userId); 
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