
const logError = e => {
    console.error(`
    === ERROR: ===============
    ${e}
    ==========================
    `)
}

const getType = obj => ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()

module.exports = {
    logError,
    getType
}