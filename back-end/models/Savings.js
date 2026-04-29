const mongoose = require("mongoose");
 
const savingSchema = new mongoose.Schema(
  {
    userProfile: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "UserProfile",
      required: [true, "User profile is required"],
    },
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
    },
    amount: {
      type: Number,
      required: [true, "Amount is required"],
      min: [0, "Amount cannot be negative"],
    },
    note: {
      type: String,
      trim: true,
      default: null,
    },
    targetAmount: {
      type: Number,
      min: [0, "Target amount cannot be negative"],
      default: null,
    },
    targetDate: {
      type: Date,
      default: null,
    },
    isAchieved: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);
 
module.exports = mongoose.model("Saving", savingSchema);