import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";
import connect from "./config/db.js";
import ErrorHandler from "./middleware/error.js";

// Import Routes
import { user } from "./route/index.js";

// Env
dotenv.config({ path: "./config/.env" });
const PORT = process.env.PORT || 5000;
const db = connect();

// App
const app = express();
// Middle-wares
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());

// Routes
app.use("/api/v1/user", user);

// Run Server
app.use(ErrorHandler);
app.listen(PORT, () => {
  console.log(`Server started running on port ${PORT}`);
});
