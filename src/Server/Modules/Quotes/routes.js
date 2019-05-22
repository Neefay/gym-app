const methods = require("./methods")

const routes_object = {
    entry: "quotes",
    prefix: "api",
    routes: [
        { request: "get", url: "/get", method: methods.getQuote }
    ]
}

module.exports = { routes_object }