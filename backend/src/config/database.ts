import { Pool } from "pg";
import dotenv from "dotenv";
dotenv.config();

const isProduction = process.env.NODE_ENV === "production";

const pool = new Pool({
  host: isProduction ? process.env.DB_HOST_PROD : process.env.DB_HOST_DEV,
  database: isProduction ? process.env.DB_NAME_PROD : process.env.DB_NAME_DEV,
  user: isProduction
    ? process.env.DB_USERNAME_PROD
    : process.env.DB_USERNAME_DEV,
  password: isProduction
    ? process.env.DB_PASSWORD_PROD
    : process.env.DB_PASSWORD_DEV,
  port: Number(
    isProduction ? process.env.DB_PORT_PROD : process.env.DB_PORT_DEV
  ),
  ssl: isProduction ? { rejectUnauthorized: false } : undefined, // useful for cloud db
});


export const connectDB = async () => {
  try {
    const client = await pool.connect();
    {
      isProduction
        ? console.log(
            `✅ Connected to ${isProduction ? "Production" : "Development"} ${
              process.env.DB_NAME_PROD
            } Database`
          )
        : console.log(
            `✅ Connected to ${isProduction ? "Production" : "Development"} ${
              process.env.DB_NAME_DEV
            } Database`
          );
    }

    client.release();
  } catch (error) {
    console.error("❌ Unexpected error on idle client", error);
    process.exit(1);
  }
};

export default pool;
