const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

//set up passport with google API ID
passport.use(
    new GoogleStrategy({
        clientID: keys.googleCLientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
        },
        (accessToken, refreshToken, profile, done) => {
            console.log(accessToken);
            console.log(refreshToken);
            console.log(profile);
        }
    )
);