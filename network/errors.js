const response = require('./response');

const errors = (error, req, res, next) => {
  console.log('errors -> error', error);

  const message = error.message || 'Internal error';
  const status = error.statusCode || 500;

  response.error(req, res, message, status);
};

module.exports = errors;