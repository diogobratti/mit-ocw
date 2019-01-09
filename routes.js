const express = require('express')

const routes = express.Router();

const Class6006 = require('./class6006/Class6006');

routes.get('/', function (req, res) {
  //res.send('Hello World!')
  res.render('index');
})
routes.get('/peakFinder', Class6006.peakFinder)

module.exports = routes;