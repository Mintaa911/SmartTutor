import { User } from "../model/user.model.js";
import { Request } from "../model/request.model.js";

import ErrorResponse from "../util/errorResponse.js";
import { getUserService } from "../service/user.service.js";

const getUser = async (req, res, next) => {
  const id = req.params.user_id;
  if (!id) {
    return next(new ErrorResponse("Invalid User Id", 400));
  }
  try {
    let user = await User.findById(id);
    if (!user) {
      return res.status(404).json({
        msg: "User not found",
      });
    }

    user.salt = undefined;
    user.hashedPassword = undefined;
    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (err) {
    res.status(400).json({ msg: "Internal Server Error" });
  }
};

const getUserRequests = async (req, res, next) => {
  const id = req.params.user_id;
  if (!id) {
    return next(new ErrorResponse("Invalid user id", 400));
  }
  try {
    let requests = await Request.find({ sender: id });
    res.status(200).json({ data: requests });
  } catch (err) {
    res.status(500).json({ msg: "Internal Server Error" });
  }
};
const getUserRequestById = async (req, res, next) => {
  const request_id = req.params.request_id;

  if (!id) {
    return next(new ErrorResponse("Invalid user id", 400));
  }
  try {
    let request = await Request.findOne({ _id: request_id });
    res.status(200).json({ data: request });
  } catch (err) {
    res.status(500).json({ msg: "Internal Server Error" });
  }
};
export { getUser, getUserRequests, getUserRequestById };
