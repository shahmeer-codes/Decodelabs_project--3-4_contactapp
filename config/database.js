import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();
export const dbconnect=()=>{
mongoose.connect(process.env.DB_URL).then(()=>{
  console.log("database connect ho gaya ha");
})
}