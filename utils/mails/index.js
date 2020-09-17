const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'designincrochet.app@gmail.com',
    pass: 'ZfQ&K9o1ey25', // naturally, replace both with your real credentials or an application-specific password
  },
});

const mailOptions = {
  from: '"DesignInCrochet 🧶" <designincrochet.app@gmail.com>', // sender address
  to: 'carolstefannym@gmail.com, josedav_96@hotmail.com', // list of receivers
  subject: 'Design in Crochet', // Subject line
  text: 'Hello world?', // plain text body
  html: '<b>Hello world?</b>', // html body
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.error(error.message);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
