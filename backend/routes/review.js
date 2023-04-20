import express from "express";
const router = express.Router();
import { newReview, getReviewsForUser } from "../controller/review.js";
import authorize from "../middleware/authorization.js";

router.post("/", newReview);
router.get("/:user_id", getReviewsForUser);

export default router;
