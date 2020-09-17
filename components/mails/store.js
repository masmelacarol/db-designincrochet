const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'designincrochet.app@gmail.com',
    pass: 'ZfQ&K9o1ey25', // naturally, replace both with your real credentials or an application-specific password
  },
});

const mailOptions = async (title, mailTo, mailFrom, html) => {
  return {
    from: mailFrom,
    to: mailTo,
    subject: 'Design in Crochet',
    text: title,
    html: html,
  };
};

const sendMail = async (mailOptions) => {
  try {
    const mailTransporter = await transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.error(error.message);
      }
      console.log('Email sent: ' + info.response);
      return info.message;
    });
    return mailTransporter;
  } catch (error) {
    return console.error(error.message);
  }
};

module.exports = {
  send: sendMail,
  options: mailOptions,
};
