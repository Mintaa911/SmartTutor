import mongoose from "mongoose";
import Joi from "joi";

import crypto from "crypto";
import { v4 as uuidv4 } from "uuid";
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      minlength: 2,
    },
    phone: {
      type: String,
      trim: true,
      minlength: 10,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: 255,
    },
    company: {
      type: String,
      trim: true,
      minlength: 2,
    },
    address: {
      type: String,
      minlength: 2,
    },
    city: {
      type: String,
      trim: true,
      minlength: 2,
    },
    tags: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Permissions",
        nullable: true,
      },
    ],
    hashedPassword: {
      type: String,
      required: true,
    },
    salt: String,
    role: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

userSchema
  .virtual("password")
  .set(function (password) {
    this._password = password;
    this.salt = uuidv4();

    this.hashedPassword = this.encryptPassword(password);
  })
  .get(function () {
    return this._password;
  });

userSchema.methods = {
  authenticate: function (txt) {
    return this.encryptPassword(txt) === this.hashedPassword;
  },
  encryptPassword: function (password) {
    if (!password) return "";
    try {
      return crypto
        .createHmac("sha1", this.salt)
        .update(password)
        .digest("hex");
    } catch (err) {
      return "";
    }
  },
};

export function validateUserSignup(user) {
  const schema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    phone: Joi.string()
      .length(10)
      .pattern(/^[0-9]+$/),
    company: Joi.string().min(2).max(20),
    address: Joi.string().min(2).max(30),
    city: Joi.string().min(3).max(30),
    password: Joi.string()
      .min(6)
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
      .required(),
    password_confirmation: Joi.string().required().valid(Joi.ref("password")),

    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .required(),
  });

  try {
    var messages = {};
    let errors = schema.validate(user, { abortEarly: false });
    errors = errors.error.details;

    errors.forEach((error) => {
      messages[error.path] = error.message;
    });

    return messages;
  } catch (errors) {
    return;
  }
}

export function validateUserSignIn(user) {
  const schema = Joi.object({
    password: Joi.string()
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
      .required(),
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .required(),
  });

  try {
    var messages = {};
    let errors = schema.validate(user, { abortEarly: false });
    errors = errors.error.details;
    errors.forEach((error) => {
      messages[error.path] = error.message;
    });
    return messages;
  } catch (errors) {
    return;
  }
}
export function validateUsers(user) {
  const schema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .required(),
    password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).allow(""),
    role: Joi.string(),
  });

  try {
    var messages = {};
    let errors = schema.validate(user, { abortEarly: false });
    errors = errors.error.details;
    errors.forEach((error) => {
      messages[error.path] = error.message;
    });
    return messages;
  } catch (errors) {
    return;
  }
}

export const User = mongoose.model("User", userSchema);
