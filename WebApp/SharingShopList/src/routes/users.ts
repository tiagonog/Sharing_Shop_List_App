import express = require('express');
import Usuario = require('../models/Usuario/Usuario');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  Usuario usuario = new Usuario("123@abc.com","1234");
  res.json(usuario);
  res.send('respond with a resource');
});

export = router;
