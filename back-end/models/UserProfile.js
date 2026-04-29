const mongoose = require("mongoose");

const userProfileSchema = new mongoose.Schema(
  {
    googleId: {
      type: String,
      unique: true,
      sparse: true
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/,
    "Please provide a valid email address"
      ]
    },
    avatar: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    salary: {
      amount: {
        type: Number,
        required: [true, "Salary amount is required"],
        min: [0, "Salary cannot be negative"],
        default: 0,
      },
      currency: {
        type: String,
        default: "PHP",
        uppercase: true,
        trim: true,
      },
      frequency: {
        type: String,
        enum: ["daily", "weekly", "bi-weekly", "semi-monthly", "monthly"],
        default: "monthly",
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("UserProfile", userProfileSchema);