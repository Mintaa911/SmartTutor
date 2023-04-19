import express from "express";
const router = express.Router();
import { login, signUp } from "../controller/auth.js";

router.post("/login", login);
router.post("/register", signUp);

export default router;
