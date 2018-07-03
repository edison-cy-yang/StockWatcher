const express = require('express');
require('./services/passport');

const app = express();

//import the auth route handlers
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);