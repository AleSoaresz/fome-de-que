const express = require("express");
const cors = require("cors");
const rotasApi = require("./rotas/api");

const app = express();
app.use(cors());

app.get("/", function (req, res) {
  res.send("Servidor do Fome de Quê? funcionando!");
});

app.use("/api", rotasApi);

module.exports = app;