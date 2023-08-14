const { User } = require("../DB_connection");

const login = (req, res) => {

    (async () => {
        try {
            const { email, password } = req.query;

            if (!email || !password) {
                res.status(400).send("Faltan datos");
                return;
            }
            const validateUser = await User.findOne({ where: { email: email } })
            if (validateUser) {
                return validateUser.password === password
                    ? res.status(200).json({ access: true })
                    : res.status(403).json({ error: "Password incorrecto" });
            }

            res.status(404).json({ error: "El usuario no se encuentra registrado" });

        } catch (error) {
            res.status(500).json({ error: error });
        }
    })()
}

module.exports = login;