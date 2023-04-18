import mongoose from "mongoose";

export default function connect() {
  mongoose
    .connect(process.env.DATABASE_URI, {
      keepAlive: true,
    })
    .then(() => {
      console.log("Database connected");
    });
}
