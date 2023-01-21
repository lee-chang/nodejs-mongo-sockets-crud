import { mongoose, connect } from "mongoose";
import { MONGODB_URI } from "./config";

mongoose.set('strictQuery', false);

export const connectDB = async () => {
    try {
        const db = await connect(MONGODB_URI)
        console.log("Base de Datos conectado: ", db.connection.name);
      } catch (error) {
        console.log(error);
      }
}