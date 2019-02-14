var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "dispendable000@gmail.com",
    pass: "10pdproxy"
  }
});

var mailOptions = {
  from: "dispendable000@gmail.com",
  to: "dosssman@hotmail.fr",
  subject: "NodeJS Mail Test",
  text: "Content random no idea back to DP please !RAAAAAH"
}

transporter.sendMail( mailOptions, function( error, info) {
  if(error){
    console.log( error);
  } else {
    console.log( "Email sent" + info.response);
  }
});
