
const { sendResponse } = require("../../../API/Server/Methods/requests")
const { validateParams } = require("../../../API/Server/Methods/validation")
const { getString } = require("../../../API/Server")
const UserModel = require("./model").User

const newUser = (req, res) => {

    const   bcrypt = require('bcrypt'),
            salt = bcrypt.genSaltSync(5),
            { username, password, name, email } = req.body,
            hashedPassword = bcrypt.hashSync(password, salt)

    new UserModel({ username, password: hashedPassword, name, email }).save(err => {
        if (!validateParams(req, res, [!err], getString("RESPONSES.USERS.ACCOUNT_ERROR", req))) { return 0; }
        sendResponse(req, res, true, getString("RESPONSES.USERS.ACCOUNT_OK", req))
    });
}

const getUser = (req, res) => {
    UserModel
        .findOne({ name: "Ian" })
        .exec((err, data) => {
            res.json(data);
        });
}

module.exports = {
    newUser,
    getUser
}