const express = require('express')  // Import express
const app = express()  // create the express app

require('./config')(app);
require('./routes')(app);