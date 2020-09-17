const store = require('./store');

const createComment = async (idUser, idProduct, comment, rating) => {
  try {
    const commentStore = await store.create(idUser, idProduct, comment, rating);
    return await commentStore;
  } catch (error) {
    const message = `Ocurrio un error creando un comentario, ${error.message}`;
    console.error('comment controller error', error.message);
    return message;
  }
};

const getAllComments = async () => {
  try {
    const getAllComments = await store.getAll();
    return await getAllComments;
  } catch (error) {
    const message = 'Ocurrio un error encontrando los comentarios.';
    console.error('getAllComments controller error', error);
    return message;
  }
};

const getAllCommentsByProduct = async (idProduct) => {
  try {
    const getAllComments = await store.getByProduct(idProduct);
    return await getAllComments;
  } catch (error) {
    const message = 'Ocurrio un error encontrando los comentarios del producto.';
    console.error('getAllCommentsByProduct controller error', error);
    return message;
  }
};

module.exports = {
  createComment,
  getAllComments,
  getAllCommentsByProduct,
};
