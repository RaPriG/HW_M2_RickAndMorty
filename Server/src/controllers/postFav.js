const { Favorite } = require("../DB_connection");

const postFav = async (req, res) => {
    try {
        const body = req.body;
        const { id, name, origin, status, image, species, gender } = body;
        if (!id || !name || !origin || !status || !species || !gender || !image) {
            return res.status(400).json({ error: "Faltan datos" });
        }
        // console.log({ ...body });
        const [favorite, created] = await Favorite.findOrCreate({
            where: { ...body },
        });
        if (created) {
            const allFavorites = await Favorite.findAll();
            return res.status(201).json(allFavorites );
        }
        return res.status(200).json({ error: "El personaje ya habia sido registrado" });
      
    } catch (error) {
        return res.status(500).json({ error: error });
    }

}

module.exports = postFav;