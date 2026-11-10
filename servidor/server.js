require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const PORTA = process.env.PORTA || 3000;
const lugares = require("./lugares");

app.get("/", function (req, res) {
  res.send("Servidor do Fome de Quê? funcionando!");
});

app.get("/api/lugares", function (req, res) {
  res.json(lugares);
});

app.listen(PORTA, function () {
  console.log("Servidor rodando em http://localhost:" + PORTA);
});