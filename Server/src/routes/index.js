const express = require("express");
const getCharById = require("../controllers/getCharById");
const login = require("../controllers/login");

const router = express.Router();

router.get('/:id', getCharById);
router.post('/login', login);

module.exports=router;