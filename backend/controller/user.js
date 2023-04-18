import User from "../model/user.model.js";
import ErrorResponse from "../util/errorResponse.js";
import { getUserService } from "../service/user.service.js";

const getUser = async (req, res, next) => {
	const { error, statusCode, data } = await getUserService();

	if (error) {
		return next(new ErrorResponse(error, statusCode));
	}

	res.status(statusCode).json({
		success: true,
		data,
	});
};

export { getUser };
