const express = require('express');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller');

router.post('/', async (req, res, next) => {
  try {
    const user = await controller.createUser(req.body);
    response.success(req, res, user, 201);
  } catch (error) {
    console.log('error', error);
    next();
  }
});

router.post('/auth', async (req, res, next) => {
  try {
    const token = await controller.createToken(req.body.uid);
    response.success(req, res, token, 201);
  } catch (error) {
    console.log('error', error);
    next();
  }
});

router.get('/', async (req, res, next) => {
  try {
    const users = await controller.getAllUsers();
    response.success(req, res, users, 200);
  } catch (error) {
    next();
  }
});

router.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const userId = await controller.getUserById(id);
    response.success(req, res, userId, 200);
  } catch (error) {
    next();
  }
});

module.exports = router;
