const express = require('express');

const app = express();

app.get("/set", (req, res) => {
  res.setHeader("Set-Cookie", "name=KY");
  res.setHeader("Set-Cookie", "age=62");
  res.send("쿠키 set");
});

// 쿠기 읽기
app.get("/get", (req, res)=>{
  const cookie = req.headers.cookie;
  if(cookie) {
    res.send(cookie);
  }
  else {
    res.send("쿠키가 없어요");
  }
});

app.listen(3000);