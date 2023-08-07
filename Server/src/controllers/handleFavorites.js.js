let myFavorites = [];

const postFav = (req, res) => {
    try {
        myFavorites = [...myFavorites, req.body];
        res.status(200).json(myFavorites);
    } catch (error) {
        res.status(404).json({ error: error });
    }
}

const deleteFav = (req, res) => {
    try {
        const { id } = req.params;
        myFavorites = myFavorites.filter(p => p.id !== Number(id));
        res.status(200).json(myFavorites);
    } catch (error) {
        res.status(404).json({ error: error });
    }
}

module.exports = {
    postFav,
    deleteFav
}