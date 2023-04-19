import express from "express";
const router = express.Router();
import {
  getUser,
  newRequest,
  getUserRequests,
  getUserRequestById,
} from "../controller/user.js";
import authorize from "../middleware/authorization.js";

router.get("/:user_id", getUser);
router.post("/:user_id/request", newRequest);
router.get("/:user_id/request", getUserRequests);
router.get("/:user_id/request/:request_id", getUserRequestById);

export default router;
