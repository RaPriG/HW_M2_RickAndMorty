const { Favorite } = require("../DB_connection");

const deleteFav = async (req, res) => {

    try {
        console.log("DELETE:");
        const { id } = req.params;
        await Favorite.destroy({ where: { id } });
        const allFav = await Favorite.findAll();
        res.status(200).json(allFav);
    } catch (error) {
        res.status(500).json({ error: error });
    }
}


module.exports = deleteFav;