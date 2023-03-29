const http = require('http');
// const fs = require('fs');
const url = require('url');

const app = http.createServer(function(req, res) {
    let _url = req.url; //문자열 형태
    //문자열 형태의 _url를 object 형태로 변환
    let queryData = url.parse(_url, true).query;
    res.end(queryData.id);
});

app.listen(3333);
