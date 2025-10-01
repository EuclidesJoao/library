import app from "./app";
import dotenv from "dotenv";
dotenv.config();
import { AppDataSource } from "./database/data-source";

AppDataSource.initialize().then(async () => {
  app.listen(process.env.PORT, () => {
    console.log(`🚀 Library server is running on port: ${process.env.PORT}`);
  });
});
