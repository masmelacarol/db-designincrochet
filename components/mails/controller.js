const store = require('./store');
const html = require('./model');

const mailOptions = async (options) => {
  const { title, mailTo, mailFrom, products, user } = options;
  console.log('mailOptions -> user', user);
  try {
    const htmlTemplate = await html.getHtml(products, user);
    console.log('mailOptions -> htmlTemplate', htmlTemplate);
    const options = await store.options(title, mailTo, mailFrom, htmlTemplate);
    return await options;
  } catch (error) {
    const message = `Ocurrio un error creando las opciones de correo, ${error.message}`;
    console.error('mails controller error', error.message);
    return message;
  }
};

const sendMail = async (mailOptions) => {
  try {
    const mail = await store.send(mailOptions);
    return await mail;
  } catch (error) {
    const message = `Ocurrio un enviando un correo, ${error.message}`;
    console.error('mails controller error', error.message);
    return message;
  }
};

module.exports = {
  mailOptions,
  sendMail,
};
