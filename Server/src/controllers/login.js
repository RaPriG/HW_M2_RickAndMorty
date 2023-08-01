const user  = require("../utils/users");
const login = (req, res) => {

    try {
        console.log(req.body.email, "|||", user.email);
        console.log(req.body.password, "|||", user.password);
        if (req.body.email === user.email && req.body.password === user.password) {
            res.status(200).json({ access: true });
        } else {
            res.status(200).json({ access: false });
        }
    } catch (error) {
        res.status(400).json({ error: error });
    }

}

module.exports = login;