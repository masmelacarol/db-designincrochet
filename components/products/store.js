const productModel = require('./model');

const createProduct = (product) => {
  const newProduct = new productModel(product);
  return newProduct.save();
};

const getAllProducts = () => {
  return productModel.find({});
};

const getProductById = (id) => {
  return productModel.findOne({ _id: id });
};

module.exports = {
  create: createProduct,
  getAll: getAllProducts,
  getID: getProductById,
};
