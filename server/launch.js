const express = require('express');
const auth = require('./auth');

module.exports = function(app) {

  app.use(express.static('public'));

  app.use('/login', auth);
  
  app.all('*', (req, res) => {
    res.status(404).send('<h1>Error 404. Page not found</h1>');
  });
}