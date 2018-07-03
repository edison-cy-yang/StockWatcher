const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

const app = express();

//set up passport with google API ID
passport.use(new GoogleStrategy({
                clientID: keys.googleCLientID,
                clientSecret: keys.googleClientSecret,
                callbackURL: '/auth/google/callback'
            },
            (accessToken, refreshToken, profile, done) => {
                console.log(accessToken);
                console.log(refreshToken);
                console.log(profile);
            })
);

//authenticate the user with oath callback into the oauth flow
//ask for user profile and email
app.get(
    '/auth/google',
    passport.authenticate('google', {
        scope: ['profile', 'email']
    })
);

app.get('/auth/google/callback', passport.authenticate('google'))

const PORT = process.env.PORT || 5000;
app.listen(PORT);