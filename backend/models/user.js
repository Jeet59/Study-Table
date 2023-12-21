const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, unique: true },
    password: String,
    college: {
      type: String,
      default: " ",
    },
    course: {
      type: String,
      default: " ",
    },
    year: {
      type: String,
      default: " ",
    },
    interests: {
      type: String,
      default: " ",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
