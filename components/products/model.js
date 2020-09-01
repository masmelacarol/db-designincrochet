const mongoose = require('mongoose');
const { Schema } = mongoose;

const productsSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  color: { type: [String], required: true },
  size: { type: [String], required: true },
  images: { type: [String], required: true },
  category: { type: String, required: true },
  theme: { type: String, required: true },
});

module.exports = mongoose.model('products', productsSchema);
