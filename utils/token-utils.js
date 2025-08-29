const crypto = require('crypto');

const tokenStore = {}; //Simplified token store

const generateToken = () => {
    return crypto.randomBytes(16).toString('hex'); //32 char hex string
};

exports.generateAndStoreToken= (userId) => {
    const token = generateToken();
    tokenStore[userId] = token;
    return token;
};

exports.validateUserToken= (userId, incomingToken) => {
    const savedToken = tokenStore[userId];
    if (!savedToken) return false;

    //Simple equality check
    if(savedToken === incomingToken) return true;
};
