
const axios = require("axios")
const { sendResponse } = require("../../../API/Server/Methods/requests")

const getQuote = (req, res) => {
    const _sample = require("lodash/sample")
    const quotesJSON = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
    axios.get(quotesJSON).then(d => {
        sendResponse(req, res, true, null, _sample(d.data.quotes))
    });
}

module.exports = {
    getQuote
}