import app from "./app";
import dotenv from "dotenv";
dotenv.config();
import { connectDB } from "./config/database";

const startServer = async () => {
  try {
    await connectDB();
    app.listen(process.env.PORT,()=>{
        console.log(`🚀 Server is running on port: ${process.env.PORT}`)
    })
  } catch (error) {}
};

startServer();
