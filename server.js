const express = require('express');

const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 8080;


// Ensuring logs directory exists
if (!fs.existsSync(path.join(__dirname, 'logs'))) { 
    fs.mkdirSync(path.join(__dirname, 'logs')); 
}

   
// * In-built Middleware
app.use(express.json());

// ! Global Custom Middleware 
//here loggin every request
const logMiddleware = require('./middleware/log.middleware.js');
app.use(logMiddleware);

//---------------------
const publicRoutes = require('./routes/public.routes.js');
app.use('/public', publicRoutes);

//----------------------
const privateRoutes = require('./routes/private.routes.js');
app.use('/private', privateRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
