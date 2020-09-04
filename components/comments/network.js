const express = require('express');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller');

router.get('/', async (req, res, next) => {
  try {
    const comments = await controller.getAllComments(req.body);
    response.success(req, res, comments, 200);
  } catch (error) {
    next();
  }
});

router.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const comments = await controller.getAllCommentsByProduct(id);
    response.success(req, res, comments, 200);
  } catch (error) {
    next();
  }
});

router.post('/', async (req, res, next) => {
  const { users, products, comment, rating } = req.body;
  try {
    const createComment = await controller.createComment(users, products, comment, rating);
    response.success(req, res, createComment, 201);
  } catch (error) {
    next();
  }
});

module.exports = router;
