const express = require("express");
const router = express.Router();
const passport = require("../config/passport");

// @route   GET /auth/google
// @desc    Redirect user to Google login page
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// @route   GET /auth/google/callback
// @desc    Google redirects back here after login
router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/auth/failed" }),
  (req, res) => {
    // Successful login
    res.redirect("/auth/success");
  }
);

// @route   GET /auth/success
// @desc    Login success — returns the logged in user
router.get("/success", (req, res) => {
  if (!req.user) {
    return res.redirect("/auth/failed");
  }
  res.status(200).json({
    success: true,
    message: "Login successful",
    user: {
      id: req.user._id,
      name: req.user.name,
      email: req.user.email,
      avatar: req.user.avatar,
    },
  });
});

// @route   GET /auth/failed
// @desc    Login failed
router.get("/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "Google authentication failed",
  });
});

// @route   GET /auth/logout
// @desc    Logout the user and destroy the session
router.get("/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      return res.status(500).json({ success: false, message: "Logout failed" });
    }
    req.session.destroy();
    res.status(200).json({ success: true, message: "Logged out successfully" });
  });
});

module.exports = router;