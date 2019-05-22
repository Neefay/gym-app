const methods = require("./methods")

const routes_object = {
    entry: "user",
    prefix: "api",
    routes: [
        { request: "post", url: "/post", method: methods.newUser },
    ]
}

module.exports = { routes_object }