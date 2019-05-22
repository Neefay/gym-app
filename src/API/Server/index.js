
const   path = require('path'),
        fs = require('fs'),
        modules_path = path.join(__dirname, "../../Server/Modules"),
        folders = fs.readdirSync(modules_path).filter(file => ((file.indexOf(".") < 0) && (file !== "index.js")));

const getFile = filename => {
    let files = {};

    folders.forEach(file => {
    const   modPath = path.join(modules_path, file),
            folder = file;
    fs.readdirSync(modPath)
        .filter(file => (file === filename))
        .forEach(file => files[folder] = require(path.join(modPath, file)));
    });
    return files;
}

const getMethods = () => getFile("methods.js")

const mountAllRoutes = (app, express) => {
    const routes_object = getFile("routes.js");

    for (let k in routes_object) {
    const   router = express.Router(),
            routeObj = routes_object[k].routes_object;
    for (let i = 0; i < routeObj.routes.length; i++) {
        const rObj = routeObj.routes[i];
        rObj.middleware ? router.use(rObj.method) : router[rObj.request](rObj.url, rObj.method)
    }
    app.use(`/${(routeObj.prefix)}/${routeObj.entry}`, router);
    }
}

module.exports = {
    getMethods,

    mountAllRoutes
}