import { User } from "../model/user.model.js";
import ErrorResponse from "../util/errorResponse.js";
import jwt from "jsonwebtoken";

export default async function authorize(req, res, next) {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] == "Bearer"
  ) {
    token = req.headers.authorization.split(" ")[1];
  }
  if (!token) {
    return next(new ErrorResponse("Unauthorized route", 401));
  }

  try {
    console.log(process.env.JWT_SECRET);
    let decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(token);

    const usr = await User.findById(decoded._id);
    if (!usr) {
      return next(new ErrorResponse("Unauthorized route", 401));
    }
    req.user = usr;
  } catch (error) {
    console.log(error);
    return next(new ErrorResponse("Unauthorized route", 401));
  }

  next();
}
