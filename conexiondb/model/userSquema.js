
// TODO: Definir esquemas de Mongoose para usuarios 
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: Number,
    required: true,
  },
});

const UserModel = mongoose.model('users', userSchema);

module.exports = UserModel;