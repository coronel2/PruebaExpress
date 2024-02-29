const express = require("express");
const router = express.Router();
const TareasModel = require('../conexiondb/model/tareasquema');
const connectDB = require('../conexiondb/db');
// Conectar a la base de datos
connectDB();

//Rutas para crear tareas

const createTask = router.post("/crearTareas", async (req, res) => {
  const {title,description, completed} = req.body;
  const tareas = new TareasModel({
    title,
    description,
    completed,
  
  });

  try {
    await tareas.save();
    res.status(200).send(tareas)
  } catch (error) {
    res.send(error);
  }
});


// Ruta para ver todos las tareas

const showTask = router.get("/mostrartareas", async (req, res) => {
  const findtareas = await TareasModel.find({});
  try {
if(findtareas.length === 0) res.status(400).json( "tareas no disponibles");
res.status(200).send(findtareas);
  } catch (error) {
   res.status(500).send(error);
  }

  });

//Rutas para actualizar tareas

const updateTask = router.put("/actualizarTarea:id", async (req, res) => {
    const id = req.params.id;
    const data = req.body

  try {
   const actualizar= await TareasModel.findByIdAndUpdate(
    {_id:id},{$set:{...data}},{new:true});
    res.send(actualizar);
  } catch (error) {
    res.status(500).send(error);
  }
});


//Ruta para eliminar tareas

const deleteTask = router.delete("/eliminarTarea:id", async (req, res) => {
  const id = req.params.id;
  try {
    const tarea = await TareasModel.findByIdAndDelete(id);

    if (!tarea) res.status(404).send("Tarea no encontrada");
    res.status(200).send("tarea eliminada");
  } catch (error) {
    res.status(500).send(error);
  }
});

const crud ={
createTask,
showTask,
updateTask,
deleteTask

}
module.exports = crud;
module.exports = router;