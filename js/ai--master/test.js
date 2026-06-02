const express = require("express");
const app = express();
const port = 3000;
app.get("/", (req, res) => {
  res.send("访问路由就返回 我™莱纳");
});
app.post("/", (req, res) => {
  res.send("我™post");
});
// app.get("/ts",(req,res)=>{
//   console.log(req.url)
//   console.log(req.path)
//   console.log(req.query)
//   // 路径 + 查询参数
//   // res.send(req.url)

//   // ?keyword=iphone&page=2&color=black
//   // res.send(req.query)

//   // 纯路径
//   // res.send(req.path)

//   // parmas参数
//   // ?id=123&name=gemini
//   res.send("nb")
// })

app.get("/ts", (req, res) => {
  console.log("完整URL:", req.url);
  console.log("查询参数:", req.query); // 对应你注释里的 ?id=123

  // 设置响应头 (推荐用 set，更符合 Express 习惯)
  res.set("Content-Type", "text/plain; charset=utf-8");

  // 如果要看某个 Header，需要传 Key
  console.log("当前Content-Type:", res.get("Content-Type"));

  res.send("访问成功，莱纳你坐啊");
});
app.listen(port, () => {
  console.log("服务器启动成功");
});
