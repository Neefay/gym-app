
const   bodyParser = require('body-parser'),
        morgan = require('morgan'),
        cors = require('cors'),
        serveStatic = require('serve-static'),
        { resolve } = require('path'),
        history = require('connect-history-api-fallback'),

        routes = require('./Config/routes'),
        db = require('./Config/db'),
        auth = require('./Auth'),

        publicPath = resolve(__dirname, '../../dist'),
        staticConf = { maxAge: '1y', etag: false };

module.exports = (app, e) => {
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json({ limit: '1mb' }))

    app.set('port', process.env.VUE_APP_API_PORT);
    app.use(cors())
    app.use(morgan('dev'))

    app.use(serveStatic(publicPath, staticConf))

    routes.setup(app)
    auth.setup(app)
    db().then(() => console.log("SERVER:", "Connected to the database."));

    app.use(history())
}
