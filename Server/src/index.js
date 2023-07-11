const http = require("http");
const fs = require("fs");

const PORT = 3001;
const API = "/rickandmorty/character";
const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    let urlPpl = (req.url.at(-1) === "/") ? req.url.substring(0, req.url.length - 1) : req.url;
    let urlApi = urlPpl.split("/");
    let id = urlApi.pop();

    if (urlApi.join("/") === API) {
        fs.readFile('./src/utils/data.js', (err, data) => {

          
            if (err) {
                res.writeHead(404, { "Content-Type": "text/plain" });
                res.end("Error al contectar con la data");
            } else {
                let filt = data.filter(p => {
                    p.id === Number(id)
                    console.log(p.id, "---" + Number(id));
                })
    
                res.writeHead(200, { "Content-Type": "application/json" });
                res.end(filt);
            }
        },"utf-8");
    }
    else if (urlPpl === API) {
        console.log("SIN ID....");
        fs.readFile('./src/utils/data.js', (err, data) => {
            if (err) {
                res.writeHead(404, { "Content-Type": "text/plain" });
                res.end("Error al contectar con la data");
            } else {
                res.writeHead(200, { "Content-Type": "text/json" });
                res.end(data);
            }
        },"utf-8");
    }

    return;
    // res.writeHead(404, { "Content-Type": "text/plain" });
    // res.end();

}).listen(PORT, "127.0.0.1");


module.exports = {
    server,
}