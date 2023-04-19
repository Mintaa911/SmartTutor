import express from "express";
const router = express.Router();
import { search, getTutors, getTutorById } from "../controller/common.js";

router.get("/search", search);
router.get("/tutors", getTutors);
router.get("/tutors/:tutor_id", getTutorById);

export default router;
