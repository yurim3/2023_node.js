const express = require("express");

const app = express();

app.get("/set", (req, res) => {
  res.setHeader("Set-Cookie", "name=KY");
  res.setHeader("Set-Cookie", "age=62");
  res.send("쿠키 set");
});

// 쿠키 읽기
app.get("/get", (req, res) => {
  //쿠키는 string이다
  const cookie = req.headers.cookie;
  if (cookie) {
    // "name="이 있는 idx의 시작값을 찾는데, 존재하지 않으면 -1 return
    const nameStartIdx = cookie.indexOf("name=");

    // name이 존재한다면
    if (nameStartIdx > -1) {
      let name = cookie.substring(nameStartIdx + 5);
      const nameEndIdx = name.indexOf(";");
      // 문자열 끝에 ';'이 있으면
      if (nameEndIdx > -1) {
        name = name.substring(0, nameEndIdx);
        res.send(`Hello ${name}`);
      }
      // 문자열 끝에 ';'이 없으면(쿠키가 하나만 있거나 name이 마지막 쿠키라면)
      else {
        res.send(`Hello ${name}`);
      }
    } else {
      res.send("name이 존재하지 않음");
    }
  } else {
    res.send("쿠키가 없어요");
  }
});

app.listen(3000);
