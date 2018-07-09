var express = require('express');
var router = express.Router();
const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
	host: 'smtp.gmail.com',
	port: 465,
	secure: true,
	auth: {
		user: 'tickleburnt@gmail.com',
		pass: 'peanut420'
	},
	tls: { rejectUnauthorized: false }
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
	let mailOptions = {
		from: "contact_form@autoimagetint.com",
		to: "tickleburnt@gmail.com",
		subject: "New Quote Inquiry: Window Tinting",
		html: "<h3>You have received a quote inquiry from "+req.body.fname + " " + req.body.lname + ". Here is the message</h3><p>First Name: "+req.body.fname + "<br>Last Name: "+req.body.lname+"<br>Email: "+req.body.email+"<br>Phone: "+req.body.phone+"<br>Make: "+req.body.make+"<br>Model: "+req.body.model+"<br>Year: "+req.body.year+"<br>Further Questions and Comments: "+req.body.comment+"</p>",
		replyTo: req.body.email
	};
	console.log("SENDING MAIL")
	transporter.sendMail(mailOptions, (error, info) => {
		if(error) {
			console.log("SENT FAIL");
			 console.log(error);
		}
		// console.log('Message sent: %s', info.messageId);
	})
})



module.exports = router;
