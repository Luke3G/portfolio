src="https://unpkg.com/aos@2.3.1/dist/aos.js"


const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname)));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(process.env.PORT || 3000);

app.use(express.static(path.join(__dirname, 'public')));

//test nodemailer
// const bodyParser = require('body-parser');;
// const nodemailer = require("nodemailer");


// app.post('/send', (req, res) =>{
//   const outpout = `
//   <p>You have a new contact request</p>
//   <h3>Contact Details</h3>
//   <ul>
//     <li>Name: ${req.body.name}</li>
//   </ul>
//   <h3>Message<</h3>
//   <p>${req.body.message}</p>
//   `
// });

 

// // async..await is not allowed in global scope, must use a wrapper
// async function main() {
//   // Generate test SMTP service account from ethereal.email
//   // Only needed if you don't have a real mail account for testing
//   let testAccount = await nodemailer.createTestAccount();

//   // create reusable transporter object using the default SMTP transport
//   let transporter = nodemailer.createTransport({
//     host: "outlook.office365.com",
//     port: 993,
//     secure: false, // true for 465, false for other ports
//     auth: {
//       user: 'luke3me@outlook.com', // generated ethereal user
//       pass: '!Lucasg112233' // generated ethereal password
//     },
//     tls:{
//       rejectUnauthorized:false
//     }
//   });

//   // send mail with defined transport object
//   let info = await transporter.sendMail({
//     from: '"Lucas" <testingnode1997gmail.com>', // sender address
//     to: "Lucaseganter18@gmail.com", // list of receivers
//     subject: "Node Contact Request", // Subject line
//     text: "Hello world?" // plain text body // html body
//   });

//   console.log("Message sent: %s", info.messageId);
//   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

//   // Preview only available when sending through an Ethereal account
//   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
//   // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
// }

// main().catch(console.error);