import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import connect from "./config/db.js";
import ErrorHandler from "./middleware/error.js";
import { user } from "./route/index.js";

dotenv.config({ path: "./config/.env" });
const PORT = process.env.PORT || 5000;

const db = connect();

const app = express();
app.use(cors());
app.use(morgan("dev"));

app.use("/api/v1/user", user);

app.use(ErrorHandler);
app.listen(PORT, () => {
	console.log(`Server started running on port ${PORT}`);
});
