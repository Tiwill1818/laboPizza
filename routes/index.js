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
