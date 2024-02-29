// TODO: Definir esquemas de Mongoose para  y tareas

const mongoose= require('mongoose');

const tareaSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  
  completed: {
    type: Boolean,
    required: true,
  },



});

const TareasModel = mongoose.model('tareas', tareaSchema);

module.exports = TareasModel;