const util=require("../utils/token-utils");
const authMiddleware = (req, res, next) => {
    const token = req.headers['authorization'];
    const userId = 1; //Hardcoded for demo

    if (token && util.validateUserToken(userId, token)) {
        req.user = { name: 'Kuldipak', id: userId };
        next();
    } else {
        res.status(401).send('Unauthorized: invalid or missing token');
    }
};

module.exports = authMiddleware