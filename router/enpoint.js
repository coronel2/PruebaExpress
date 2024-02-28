const express = require("express");
const router = express.Router();
const {moongose}= require('mongoose');
const TareasModel = require('../conexiondb/model/tareasquema');
const connectDB = require('../conexiondb/db');
// Conectar a la base de datos
connectDB();

// Función para crear un usuario
//const createTareas = async (tareas) => {
//  try {
  //  const newTarea = new TareasModel(tareas);
    //const result = await newTarea.save();
    //return result;
  //} catch (error) {
   // return error;
 // }
//};// 

router.post("/crear", (req, res) => {
  try {

const tareas = new TareasModel({
   
   title: req.body.title,
   description: req.body.description,
   completed: req.body.completed
  
});
const result = tareas.save();
res.status(200).send(result);
    
  } catch (error) {
    res.status(500).json({ error: error})
  }

  });








// Función para ver todos las tareas
const findTareas = async () => {
  try {
    const tareas = await TareasModel.find();
    return tareas;
  } catch (error) {
    return error;
  }
};


// Función para eliminar un tarea por ID
const deleteTareasById = async (id) => {
  try {
    const result = await TareasModel.deleteOne(id);
    return result;
  } catch (error) {
    return error;
  }
};

// Función para actualizar un tarea por ID
const updateTareas= async (id, data) => {
  try {
    const result = await TareasModel.updateOne(
      {_id: id},
      { $set: { ...data } },
      { new: true }
    );
    return result;
  } catch (error) {
    return error;
  }
};

module.exports = router;