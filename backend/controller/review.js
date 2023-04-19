import { Review } from "../model/review.model.js";

async function newReview(req, res) {
  const messages = validateReview(req.body);
  if (messages) return res.status(401).send(messages);

  try {
    let rv = await Review.findOne({ name: req.body.name });
    if (rv) return res.status(401).json({ name: "Review Already Exists" });

    let review = new Review(req.body);
    review = await review.save();

    return res.status(200).json({ review_id: review.id });
  } catch (e) {
    return res.status(500).json({ message: "Internal server Error" });
  }
}

async function getReviewsForUser(req, res) {
  try {
    const reviews = await Review.find({ user_id: req.params.id });
    return res.status(200).json(reviews);
  } catch (e) {
    return res.status(500).json({ message: "Internal server Error" });
  }
}

export { newReview, getReviewsForUser };
