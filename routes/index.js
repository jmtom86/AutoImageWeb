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
	let comment = (req.body.comment.length <= 1) ? "n/a" : req.body.comment;
	let services = "";

	if (typeof req.body.back !== 'undefined')
		services += "Back half<br> ";
	if (typeof req.body.allex !== 'undefined')
		services += "All windows except front windshield<br> ";
	if (typeof req.body.sideonly !== 'undefined')
		services += "2 side windows only<br>";
	if (typeof req.body.backonly !== 'undefined')
		services += "Rear back window only<br>";
	if (typeof req.body.frontwind !== 'undefined')
		services += "Front windshield<br>";
	console.log(services);
	let mailOptions = {
		from: "contact_form@autoimagetint.com",
		to: "tickleburnt@gmail.com",
		subject: "New Quote Inquiry: Window Tinting",
		html: "<h3>You have received a quote inquiry from "+req.body.fname + " " + req.body.lname + ". Here is the message</h3><p>First Name: "+req.body.fname + "<br>Last Name: "+req.body.lname+"<br>Email: "+req.body.email+"<br>Phone: "+req.body.phone+"<br>Car Make: "+req.body.make+"<br>Car Model: "+req.body.model+"<br>Car Year: "+req.body.year+"<br>Services requested: "+services+"<br>Further Questions and Comments: "+comment+"</p>",
		replyTo: req.body.email
	};
	console.log("SENDING MAIL")
	transporter.sendMail(mailOptions, (error, info) => {
		if(error) {
			console.log("SENT FAIL");
			 console.log(error);
		}
		res.render('quote');
		// console.log('Message sent: %s', info.messageId);
	})

})



module.exports = router;
