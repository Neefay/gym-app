
module.exports = () => require("mongoose").connect(process.env.DB, { useNewUrlParser: true })