const store = require('./store');

const createProduct = async (product) => {
  try {
    const storeProduct = await store.create(product);
    return await storeProduct;
  } catch (error) {
    const message = 'Ocurrio un error creando un producto.';
    console.error('product controller error', error.message);
    return message;
  }
};

const getAllProducts = async () => {
  try {
    const getProducts = await store.getAll();
    return await getProducts;
  } catch (error) {
    const message = 'Ocurrio un error encontrando los productos.';
    console.error('product controller error', error.message);
    return message;
  }
};

const getProductById = async (id) => {
  try {
    const getProduct = await store.getID(id);
    return await getProduct;
  } catch (error) {
    const message = `Ocurrio un error encontrando el producto del id: ${id}.`;
    console.error('product controller error', error.message);
    return message;
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
};
