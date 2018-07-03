const passport = require('passport');

module.exports = (app) => {
    //authenticate the user with oath callback into the oauth flow
    //ask for user profile and email
    app.get(
        '/auth/google',
        passport.authenticate('google', {
            scope: ['profile', 'email']
        })
    );

    app.get('/auth/google/callback', passport.authenticate('google'));
};