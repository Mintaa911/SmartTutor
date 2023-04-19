import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";
import connect from "./config/db.js";
import ErrorHandler from "./middleware/error.js";

// Import Routes
import { user, auth, review, search } from "./routes/index.js";

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
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use("/api/v1/auth", auth);
app.use("/api/v1/user", user);
app.use("/api/v1/review", review);
app.use("/api/v1/", search);

// Run Server
app.use(ErrorHandler);
app.listen(PORT, () => {
  console.log(`Server started running on port ${PORT}`);
});
