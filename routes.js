const express = require('express');
const error = require('./middleware/error');
const articles = require('./api/articles');

module.exports = function (app) {
  app.use(express.json());
  app.use('/articles', articles);
  app.use(error);
}