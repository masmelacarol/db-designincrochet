const mongoose = require('mongoose');
const { Schema } = mongoose;

const commentsSchema = new Schema({
  comment: { type: String, required: true },
  rating: { type: Number, required: true },
  products: { type: Schema.Types.ObjectId, ref: 'products' },
  users: { type: Schema.Types.ObjectId, ref: 'users' },
});

module.exports = mongoose.model('comments', commentsSchema);
