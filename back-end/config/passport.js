require("dotenv").config(); // ✅ make sure env vars are loaded
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const UserProfile = require("../models/UserProfile");

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: process.env.GOOGLE_CALLBACK_URL,
        },
        async (accessToken, refreshToken, profile, done) => {
            try {
                let user = await UserProfile.findOne({ googleId: profile.id });

                if (user) {
                    return done(null, user);
                }

                user = await UserProfile.create({
                    googleId: profile.id,
                    name: profile.displayName,
                    email: profile.emails[0].value,
                    avatar: profile.photos[0].value,
                });

                return done(null, user);
            } catch (err) {
                return done(err, null);
            }
        }
    )
);

// Saves the user id to the session
passport.serializeUser((user, done) => {
    done(null, user.id);
});

// ✅ async added
passport.deserializeUser(async (id, done) => {
    try {
        const user = await UserProfile.findById(id);
        done(null, user);
    } catch (err) {
        done(err, null);
    }
});

module.exports = passport;