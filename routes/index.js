var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
	host: 'smtp.mail.yahoo.com',
	port: 465,
	secure: true,
	auth: {
		user: 'jmtom86@yahoo.com',
		pass: 'Peanut4495@'
	}
})
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

router.get('/quote', function(req, res, next) {
	res.render('quote');
})

router.post('/sendquote', function(req, res, next) {
	console.log(req.body);
	res.render('quote');
	let mailOptions = {
		from: "" + req.body.email,
		to: "jmtom86@yahoo.com",
		subject: "Hello",
		text: "" + req.body.comment,
		replyTo: req.body.email
	};

	transporter.sendMail(mailOptions, (error, info) => {
		if(error) {
			return console.log(error);
		}
		console.log('Message sent: %s', info.messageId);
	})
})



module.exports = router;
