const crypto = require('crypto');

const generateToken = () => {
    return crypto.randomBytes(16).toString('hex');
};

const validateToken = (token) => {
    return token.length === 32;
};
module.exports = {
    generateToken,
    validateToken
};