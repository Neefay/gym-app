
const UserModel = require("./model").User

const newUser = (req, res) => {
    const   bcrypt = require('bcrypt'),
            { username, password, name, email } = req.body,
            salt = bcrypt.genSaltSync(5),
            hashedPassword = bcrypt.hashSync(password, salt)

    new UserModel({ username, password: hashedPassword, name, email }).save(err => {
        if (err) { console.error(err); return res.send(err) };
        res.send("User created successfully!");
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