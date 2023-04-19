import express from "express";
const router = express.Router();
import {
  getUser,
  getUserRequests,
  getUserRequestById,
} from "../controller/user.js";
import authorize from "../middleware/authorization.js";

router.get("/:user_id", getUser);
router.get("/:user_id/request", getUserRequests);
router.get("/:user_id/request/:request_id", getUserRequestById);

export default router;
