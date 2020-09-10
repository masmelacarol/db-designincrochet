const express = require('express');
const router = express.Router();
const controller = require('./controller');
const response = require('../../network/response');

router.post('/send', async (req, res, next) => {
  try {
    const options = await controller.mailOptions(req.body);
    const sendMail = await controller.sendMail(options);
    response.success(req, res, sendMail, 201);
  } catch (error) {
    next();
  }
});

module.exports = router;
