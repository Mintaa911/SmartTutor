import express from "express";
const router = express.Router();
import {
  search,
  allTags,
  topRated,
  getTutors,
  getTutorById,
} from "../controller/common.js";

router.get("/", async (req, res) => {
  res.status(200).json({ data: "Hello World" });
});
router.get("/tags", allTags);
router.get("/search", search);
router.get("/tutors", getTutors);
router.get("/topRated", topRated);
router.get("/tutors/:tutor_id", getTutorById);

export default router;
