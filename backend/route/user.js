import express from "express";
const router = express.Router();
import { getUser } from "../controller/user.js";
import authorize from "../middleware/authorization.js";

router.get("/", authorize, getUser);

export default router;
