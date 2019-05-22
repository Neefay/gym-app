
const   _upperFirst = require("lodash/upperFirst"),
        { getTypeMsg } = require("../Lib/validation"),

        processRoutes = v => ({
            ...v.route,
            "component": v,
            "name": `app.${(v.route.private ? "private" : "public")}.${(v.route.name.toLowerCase())}`
        }),

        importRoutes = r => {
            let routes = []
            for (let i = 0; i < r.length; i++) {
                let modl = null
                try { modl = require(`../../App/Views/${_upperFirst(r[i])}`) }
                catch(e) { console.error(e) }
                if (modl) routes.push(modl.default)
            }
            return routes
        },

        handleFormErrors = (v, prop, validators) => {
            const e = [], [ propValue, propName ] = prop

            if (!v[propValue].$dirty) return e

            for (let i = 0; i < validators.length; i++) {
                const [ vType, vConstraint ] = validators[i], msg = getTypeMsg(vType, propName, vConstraint)
                !v[propValue][vType] && e.push(msg)
            }

            return e
        },

        dev = () => (process.env.NODE_ENV === "development")

export {
    processRoutes,
    importRoutes,
    handleFormErrors,
    dev
}