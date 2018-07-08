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
        callbackURL: '/auth/google/callback',
        proxy: true //fine to walk through any proxy
        },
        async (accessToken, refreshToken, profile, done) => {
            const existingUser = await User.findOne({googleId: profile.id});
            
            if(existingUser) {
                return done(null, existingUser);
            }

            const user = await new User({googleId: profile.id}).save();            
            done(null, user);                   
        }
    )
);