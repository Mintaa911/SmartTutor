import express from "express";
const router = express.Router();
import { getUser, login, signUp } from "../controller/user.js";
import authorize from "../middleware/authorization.js";

router.get("/", authorize, getUser);
router.get("/login", login);
router.get("/register", signUp);

export default router;
