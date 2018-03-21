var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/services', function(req, res, next) {
	console.log("SERVICES");
	res.render('services')
});

router.get('/services1', function(req, res, next) {
	res.render('services1');
})

module.exports = router;
