const express = require('express');
const app = express();

// 모든 경로에 요청
app.get('*', function (req, res, next) {
    console.log('다들');
    next();
})

// 루트(/) 경로에 요청
app.get('/', function (req, res, next) {
    console.log('진행시켜');
    next();
});

// http://localhost:3333/test/JWP?lang=ko
app.get('/test/:name', function(req, res, next) {
  console.log('path', req.path);      // '/test/JWP'
  console.log('params', req.params);  // {name: 'JWP'}
  console.log('query', req.query);    // {lang: 'ko'}
  res.send('test중 콘솔을 보시오');
});

app.listen(3333);