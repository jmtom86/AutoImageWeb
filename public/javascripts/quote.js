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

function sendMail() {
  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  let carMake = document.getElementById("carmake").value;
  let carModel = document.getElementById("carmodel").value;
  let carYear = document.getElementById("caryear").value;
  let phone = document.getElementById("phone").value;
  let email = document.getElementById("email").value;
  let comment = document.getElementById("comment").value

  let mailOptions = {
		from: "contact_form@autoimagetint.com",
		to: "tickleburnt@gmail.com",
		subject: "New Quote Inquiry: Window Tinting",
		html: "<h3>You have received a quote inquiry from "+fname + " " + lname + ". Here is the message</h3><p>First Name: "+fname + "<br>Last Name: "+lname+"<br>Email: "+email+"<br>Phone: "+phone+"<br>Make: "+carMake+"<br>Model: "+carModel+"<br>Year: "+carYear+"<br>Further Questions and Comments: "+comment+"</p>",
		replyTo: email
	};
	console.log("SENDING MAIL")
	transporter.sendMail(mailOptions, (error, info) => {
		if(error) {
			console.log("SENT FAIL");
			 console.log(error);
		}
		// console.log('Message sent: %s', info.messageId);
	})
}