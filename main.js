const http = require('http');
const fs = require('fs');

const app = http.createServer(function(req, res) {
    let url = req.url;

    if(url === '/')
        url = '/index.html';

    if(url === '/favicon.ico')
        return res.writeHead(404);
        
    res.writeHead(200);
    // __dirname: 'D:/user/2023 node.js/문법' + url: /index.html
    const htmlCode = fs.readFileSync(__dirname + url);
    res.end(htmlCode);
});

app.listen(3333);
