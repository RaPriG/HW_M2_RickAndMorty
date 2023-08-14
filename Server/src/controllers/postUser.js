const { User } = require("../DB_connection");

const postUser = (req, res) => {
    (async () => {
        try {
            const { email, password } = req.body;
            if (!email || !password) {
                res.status(400).send("Faltan datos");
                return;
            }

            const [user, created ] = await User.findOrCreate({
                where: { email },
                defaults: { password }
            });
            if (created) {
                res.status(201).send("Guardado");
            } else {
                res.status(200).send("El usuario ya habia sido creado");
            }
        } catch (error) {
            res.status(500).json({ error: error });
        }
    })();
}

module.exports = postUser;