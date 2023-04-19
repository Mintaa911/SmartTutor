import express from "express";
const router = express.Router();
import { newReview, getReviewsForUser } from "../controller/review.js";
import authorize from "../middleware/authorization.js";

router.post("/", authorize, newReview);
router.get("/:id", authorize, getReviewsForUser);

export default router;
