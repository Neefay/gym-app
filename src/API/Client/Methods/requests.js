import axios from 'axios'

import { app }  from "@/main"
import { dev } from '../'
import { isValid } from "../../Lib/validation"

if (dev()) axios.defaults.baseURL = `http://localhost:${(process.env.VUE_APP_API_PORT)}`

const request = (req) => {
    const   method = (isValid(req.method) ? req.method : "get"),
            url = (isValid(req.url) ? req.url : ""),
            data = (isValid(req.data) ? req.data : {}),
            cb = (isValid(req.cb) ? req.cb : null),
            alert = (isValid(req.alert) ? req.alert : true),
            promises = (isValid(req.promises) ? req.promises : { resolve: true, reject: false }),

            timeout = (isValid(req.timeout) ? req.timeout : 5000)

    return new Promise((resolve, reject) => {
        return axios({ method, url, timeout, data })
            .then(res => {
                    const server_data = (res.data || undefined)
                    if (alert && server_data.message) app.$alert.success(server_data.message)
                    return (promises.resolve ? resolve({ ...server_data.data, count: server_data.count }) : true)
            })
            .catch(e => {
                    const server_data = (e.response ? (e.response.data || undefined) : {})
                    if (e.response && alert) app.$alert.error((server_data.message || "Error on response."));
                    return (promises.reject ? reject(server_data.data) : true)
            })
            .finally(() => (cb ? cb() : (() => true)()))
    })
}

const   requestPOST = (url, data, req = {}) => request({ url, data, ...req, method: "post" }),
        requestGET = (url, req = {}) => request({ url, ...req, method: "get" }),
        requestPUT = (url, data, req = {}) => request({ url, data, ...req, method: "put" }),
        requestDELETE = (url, req = {}) => request({ url, ...req, method: "delete" })

export {
    request,

    requestPOST,
    requestGET,
    requestPUT,
    requestDELETE
}
