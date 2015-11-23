import express = require('express');
import Lista = require('../models/entidades/Lista');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  Lista lista = new Lista("Lista de compras APS");
  res.render('index', { title: lista.toString()});
});

export = router;