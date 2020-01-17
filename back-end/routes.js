const express = require('express');
const articles = require('./api/articles');

module.exports = function (app) {
  app.use(express.json());
  app.use('/articles', articles);
}