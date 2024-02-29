// TODO: Configurar conexión a MongoDB Atlas

const {mongoose}= require('mongoose')
const env = require("dotenv");
env.config();


const MONGO_URI = process.env.MONGO_URI;



const connectDB =  async () => {
  try {

  const db =  mongoose.set('strictQuery', false).connect(MONGO_URI);

    console.log('Connected to MongoDB Atlas');
    return db;



  } catch (error) {
    console.error('Error connecting to MongoDB Atlas:', error);
  }
};


module.exports = connectDB;