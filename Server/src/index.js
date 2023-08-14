const express = require("express");
const server = express();
const router = express.Router();
const morgan = require("morgan");
const routes = require("./routes");
const { conn } = require("./DB_connection")
const PORT = 3001;
const API = "/rickandmorty";

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
        'Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
});

server.use(express.json());
server.use(morgan("dev"));

server.use(API, routes);

conn.sync({ force: true }).then(() => {
    server.listen(PORT, () => {
        console.log('Server raised in port: ' + PORT);
    });
});


module.exports = {
    server,
}