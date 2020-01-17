const express = require('express')  // Import express
const app = express()  // create the express app

app.use(function (req, res, next) {

  if (req.method === 'OPTIONS') {
    var headers = {};
    headers["Access-Control-Allow-Origin"] = "*";
    headers["Access-Control-Allow-Methods"] = "POST, GET, PUT, DELETE, OPTIONS";
    headers["Access-Control-Allow-Credentials"] = false;
    headers["Access-Control-Max-Age"] = '86400'; // 24 hours
    headers["Access-Control-Allow-Headers"] = "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, x-auth-token";
    res.writeHead(200, headers);
    res.end();
  } else {
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-auth-token');
    res.header('Access-Control-Expose-Headers', 'x-auth-token');
    res.header("Access-Control-Allow-Origin", "*");
    next();
  }

});

require('./config')(app);
require('./routes')(app);