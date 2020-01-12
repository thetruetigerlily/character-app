var express = require('express');
var router = express.Router();
const mysql = require('mysql2');
const models = require('../models');
const Sequelize = require('sequelize');
const OP = Sequelize.Op
var staticModels = require('../staticModels/characters');

/* GET home page. */
router.get('/staticCharacters', function(req, res, next) {
  res.send(JSON.stringify(
    staticModels.character
  ));
});


module.exports = router;
