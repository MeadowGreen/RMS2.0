var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  //Changes / to catalog as a redirect
  res.redirect('/catalog');
});

module.exports = router;