import jwt from "jsonwebtoken";
import {
  User,
  validateUserSignup,
  validateUserSignIn,
} from "../model/user.model.js";

// Functions
async function signUp(req, res) {
  // Validate the user
  const { error } = validateUserSignup(req.body);
  if (error) return res.status(400).json({ msg: error.details[0].message });

  // Check if the user exists
  try {
    let user = await User.findOne({ email: req.body.email.toLowerCase() });
    if (user) return res.status(400).json({ msg: "User Already Exists" });

    // Save User
    user = new User(req.body);
    await user.save();

    user.salt = undefined;
    user.hashedPassword = undefined;
    res.status(201).send({ data: user });
  } catch (err) {
    res.status(500).json({ msg: "Internal Server Error" });
  }
}

async function login(req, res) {
  // Validate the user
  const { error } = validateUserSignIn(req.body);
  if (error) return res.status(400).json({ msg: error.details[0].message });

  // Get User
  const { password } = req.body;
  const email = req.body.email.toLowerCase();
  try {
    // check User
    let user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: "User Doesn't Exists" });

    if (!user.authenticate(password)) {
      return res.status(400).json({
        msg: "Email and Password don't match",
      });
    }
    // Generate Token
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
    // res.cookie("access_token", token, { expire: new Date() + 9999 });
    const { _id, name, phone, bio, tags, role } = user;

    res
      .status(200)
      .send({ data: { _id, name, bio, phone, email, tags, role, token } });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Internal Server Error" });
  }
}

async function logout(req, res) {
  res.clearCookie("access_token");
  res.json({
    msg: "Logout Successful",
  });
}

export { signUp, login, logout };
