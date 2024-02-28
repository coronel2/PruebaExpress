// TODO: Configurar las dependencias requeridas

const express = require('express');
const enpoint = require ("../router/enpoint");
PORT= 3001;

//TODO: Inicializa la aplicación de express
const app = express()

//ruta raiz de la app.

app.use(express.json());

app.use("/listatareas", enpoint);

app.get('/', (req, res) =>{

    res.send("Bienvenidos a la Api")
});







app.listen(PORT,()=> (console.log('funcionando el puerto' + PORT)))


