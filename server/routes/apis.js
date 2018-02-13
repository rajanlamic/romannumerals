var express = require('express');
var router = express.Router();
const romannumerals = require('../services/roman-numerals');

router.get('/romannumerals/:upperLimit?', function(req, res, next) {
	let upperLimit = req.params.upperLimit || 3999;
  res.send(romannumerals.getNumeralsFor(upperLimit));
});

module.exports = router;
