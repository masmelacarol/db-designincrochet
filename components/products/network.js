const express = require('express');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller');

router.get('/', async (req, res) => {
  try {
    const getProducts = await controller.getAllProducts();
    response.success(req, res, getProducts, 200);
  } catch (error) {
    console.log('error', error);
    next();
  }
});

router.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const getProduct = await controller.getProductById(id);
    response.success(req, res, getProduct, 200);
  } catch (error) {
    next();
  }
});

router.post('/', async (req, res, next) => {
  try {
    const create = await controller.createProduct(req.body);
    response.success(req, res, create, 201);
  } catch (error) {
    next();
  }
});

module.exports = router;
