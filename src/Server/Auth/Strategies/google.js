const router = require('express').Router()
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const { redirectToURL } = require("../../../API/Server/Methods/requests")

passport.use(
    new GoogleStrategy({
        clientID: process.env.GOOGLE_AUTH_CLIENTID,
        clientSecret: process.env.GOOGLE_AUTH_SECRET,
        callbackURL: '/auth/google/redirect'
    }, (accessToken, refreshToken, profile, done) => done(null, profile))
);

router.get('/auth/session', (req, res) => {
    sendResponse(req, res, req.session.user, null, req.session.user)
})

router.get('/redirect', passport.authenticate('google'), (req, res) => {
    console.log("session", req.session);
    res.locals.user = req.session;
    redirectToURL(req, res, "signup")
});

router.get('/', passport.authenticate('google', { scope: ['profile'] }));

module.exports = {
    router,
    url: "google"
};