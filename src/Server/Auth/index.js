
exports.setup = app => {
    const   passport = require('passport'),
            cookieSession = require('cookie-session'),
            { sendResponse } = require("../../API/Server/Methods/requests"),
            { redirectToURL } = require("../../API/Server/Methods/requests")

            GOOGLE_AUTH = require('./Strategies/google')

    passport.serializeUser((user, done) => {
        done(null, user)
    })

    passport.deserializeUser((id, done) => {
        done(null, id)
    })

    app.use(cookieSession({
        name: "appsession",
        maxAge: (24 * 60 * 60 * 1000),
        keys: [process.env.SESSION_KEY]
    }))

    app.use(passport.initialize())
    app.use(passport.session())

    app.use(`/auth/${GOOGLE_AUTH.url}`, GOOGLE_AUTH.router)

    app.get('/auth/session', (req, res) => {
        console.log("user", req.locals)
        sendResponse(req, res, false, null, {})
    })
}