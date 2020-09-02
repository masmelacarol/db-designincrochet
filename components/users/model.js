const mongoose = require('mongoose');
const { Schema } = mongoose;

const usersSchema = new Schema({
  id: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true },
});

module.exports = mongoose.model('users', usersSchema);
