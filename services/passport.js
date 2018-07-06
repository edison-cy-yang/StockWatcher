const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');

//Get reference to the user model in mongoose
const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    //use the mongo user model id to generate token
    done(null, user.id);
});

//deserialize id into mongoose instance
passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
        done(null, user);
    });
});

//set up passport with google API ID
passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
        },
        (accessToken, refreshToken, profile, done) => {
            User.findOne({googleId: profile.id}).then(existingUser => {
                if(existingUser) {
                    //tell passport we're done, proceed with authentication
                    done(null, existingUser);
                }
                else {
                    new user({googleId: profile.id}).save()
                    .then(user => done(null, user));
                }
            })           
        }
    )
);