const mongoose = require("mongoose");



const expenseSchema = new mongoose.Schema(
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
    // true = needs | false = wants
    isNeed: {
      type: Boolean,
      required: [true, "Please select if this is a need or a want"],
    },
    dueDate: {
      type: Date,
      default: null,
    },
    isPaid: {
      type: Boolean,
      default: false,
    },
    note: {
      type: String,
      trim: true,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

// Virtual: check if the expense is overdue
expenseSchema.virtual("isOverdue").get(function () {
  if (!this.dueDate || this.isPaid) return false;
  return new Date() > this.dueDate;
});

// Virtual: days remaining until due
expenseSchema.virtual("daysUntilDue").get(function () {
  if (!this.dueDate) return null;
  const diff = this.dueDate - new Date();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
});

expenseSchema.set("toJSON", { virtuals: true });
expenseSchema.set("toObject", { virtuals: true });

module.exports = mongoose.model("Expense", expenseSchema);