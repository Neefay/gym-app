
function generateResponse(message, data, success, req) {
    this.message = (message || null)
    this.success = ((success === undefined) ? true : success)
    this.count = (data ? (data.count || 0) : 0)
    this.data = ((data.rows || data) || '')
}

const sendResponse = (req, res, success, message, data, status) => {
    let	response
    if (data) { response = new generateResponse(message, data, (success === undefined ? true : success), req) }
    else { response = new generateResponse(message, '', (success === undefined ? false : success), req) }
    res.status(status ? status : (success ? 200 : 400)).json(response)
}

const redirectToURL = (req, res, url) => {
    const   URL = (process.env.NODE_ENV === "development") ? ("localhost:" + process.env.PORT) : req.headers.host,
            redirectURL = `${process.env.PROTOCOL}://${URL}/`
    res.redirect(redirectURL + url)
}

module.exports = {
    sendResponse,
    redirectToURL
}