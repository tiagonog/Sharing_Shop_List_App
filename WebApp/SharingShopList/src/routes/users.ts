/// <reference path="../../typings/tsd.d.ts" />
import express = require('express');
import Usuario = require('../models/entidades/Usuario');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  Usuario usuario = new Usuario("123@abc.com","1234");
  res.json(usuario);
});

export = router;
