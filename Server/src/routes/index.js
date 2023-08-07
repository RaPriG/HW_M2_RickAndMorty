const express = require("express");
const getCharById = require("../controllers/getCharById");
const login = require("../controllers/login");
const { postFav, deleteFav } = require("../controllers/handleFavorites.js");

const router = express.Router();

router.get('/character/:id', getCharById);
router.post('/character/login', login);
router.post('/fav', postFav);
router.delete('/fav/:id', deleteFav);

module.exports = router;