/**
 * @file index.js
 * @author William Robert
 * @version 1.00
 * @date 2024/09/16
 * @brief Routeur pour la page d'accueil
 */


var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/', function (req, res, next) {
  res.render('confirmation', { title: 'Facture', mytable: req.body });
  //console.log(req.body);
});

module.exports = router;
