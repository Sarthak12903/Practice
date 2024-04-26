const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("HELLO WORLDq");
});
app.get("/twitter", (req, res) => {
  res.send("Sarthak.com");
});
app.get("/login", (req, res) => {
  res.send("<h1>You are logged in with sarthak</h1>");
});
app.listen(process.env.port, () => {
  console.log(`Server is on port ${port}`);
});
