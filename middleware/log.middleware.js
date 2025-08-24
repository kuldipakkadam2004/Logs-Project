const fs = require('fs');
const path = require('path');

// *Middleware to log all requests
const logMiddleware = (req, res, next) => {
    const log = `[${new Date().toISOString()}] ${req.method} ${req.url}\n`;

   //full path
    const logfile = path.join(__dirname, '../logs/request.log');

    
    fs.appendFile(logfile, log, (err) => {
        if (err) console.error('Failed to log request', err);
    });

    next();
};

module.exports = logMiddleware;
