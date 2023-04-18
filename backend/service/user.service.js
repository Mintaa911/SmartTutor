import { User } from "../model/user.model.js";

const getUserService = async () => {
  const user = await User.find();
  return { error: "", data: "", statusCode: 200 };
};

export { getUserService };
