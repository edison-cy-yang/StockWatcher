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

    //passport attaches the logout function to req
    app.get('/api/logout', (req, res) => {
        req.logout();
        res.send(req.user);
    })

    //passport attaches the user object to req
    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    })
};