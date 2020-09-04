const commentsModel = require('./model');
const userModel = require('../users/model');

const createComment = async (idUser, idProduct, comment, rating) => {
  const objectComment = {
    comment,
    rating,
    products: idProduct,
    users: idUser,
  };

  const newComment = await new commentsModel(objectComment);
  const saveComment = await newComment.save(newComment);
  return saveComment;
};

const getAllComments = async () => {
  return commentsModel.find().populate({ path: 'users', model: 'users' }).exec();
};

const getAllCommentsByProduct = async (idProduct) => {
  const product = await commentsModel.find({ products: idProduct }).populate('users').exec();

  return await product;
};

module.exports = {
  create: createComment,
  getAll: getAllComments,
  getByProduct: getAllCommentsByProduct,
};
