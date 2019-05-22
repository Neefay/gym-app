const   mongoose = require("mongoose"),
        Schema = mongoose.Schema

const   UserSchema = new Schema({
            username: { type: String, required: true },
            password: { type: String, required: true },
            name: { type: String, required: true },
            email: { type: String, required: true }
        }),
        User = mongoose.model("User", UserSchema),

        UserForm = [
            { name: "Username", field: "username", default: "", required: true, alpha_num: true, min_length: 5, max_length: 35 },
            { name: "Password", field: "password", default: "", required: true, alpha_num: true, min_length: 3, max_length: 32 },
            { name: "Name", field: "name", default: "", required: true },
            { name: "E-mail", field: "email", default: "", required: true, email: true }
        ]

module.exports = { User, UserForm }