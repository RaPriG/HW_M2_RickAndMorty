const http = require("http");
const fs = require("fs");

const PORT = 3001;
const API = "/rickandmorty/character";
const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    if (req.url.includes(API)) {
        let id = req.url.split("/").at(-1);
        const characters = require("./utils/data.js");
        let character = characters.find(p => p.id === Number(id));
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(character));
    }
    return;


}).listen(PORT, "127.0.0.1");


module.exports = {
    server,
}