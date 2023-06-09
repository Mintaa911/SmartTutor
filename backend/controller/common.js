import { User } from "../model/user.model.js";

const search = async (req, res, next) => {
  const queries = req.query.queries.slice(1, -1).split(",");
  try {
    const users = await User.find({
      tags: {
        $all: queries,
      },
    });
    res.status(200).json({ data: users });
  } catch (err) {
    res.status(500).json({ msg: "Internal Server Error" });
  }
};
const getTutors = async (req, res, next) => {
  try {
    const tutors = await User.find({
      role: 1,
    });
    res.status(200).json({ data: tutors });
  } catch (err) {
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

const getTutorById = async (req, res, next) => {
  const id = req.params.tutor_id;
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
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

const topRated = async (req, res, next) => {
  try {
    let users = await User.aggregate(
      {
        $group: {
          _id: "$user",
          count: { $sum: 1 },
          avg: { $avg: "$rating" },
        },
      },
      { $project: { _id: 1, count: 1, avg: { $round: ["$avg", 1] } } }
    );

    res.status(200).json({ data: users });
  } catch (err) {
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

const allTags = async (req, res, next) => {
  try {
    let users = await User.find({});
    let tags = [];
    users.forEach((user) => {
      tags = tags.concat(user.tags);
    });
    tags = [...new Set(tags)];
    res.status(200).json({ data: tags });
  } catch (err) {
    res.status(500).json({ msg: "Internal Server Error" });
  }
};
export { search, getTutors, getTutorById, topRated, allTags };
