
const   bodyParser = require('body-parser'),
        morgan = require('morgan'),
        cors = require('cors'),
        serveStatic = require('serve-static'),
        { resolve } = require('path'),

        routes = require('./Config/routes'),
        db = require('./Config/db'),

        publicPath = resolve(__dirname, '../../dist'),
        staticConf = { maxAge: '1y', etag: false };

module.exports = (app, e) => {
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json({ limit: '1mb' }))

    app.set('port', process.env.PORT);
    app.use(cors())
    app.use(morgan('dev'))

    app.use(serveStatic(publicPath, staticConf))

    routes.setup(app)
    db().then(() => console.log("SERVER:", "Connected to the database."));
}
