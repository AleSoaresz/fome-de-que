const express = require("express");
const lugares = require("../lugares");
const { validarTextoBusca } = require("../utils/validacao");
const { buscarLugares } = require("../servicos/busca");

const router = express.Router();

// GET /api/lugares: devolve todos os lugares
router.get("/lugares", function (req, res) {
  res.json(lugares);
});

// GET /api/busca?q=texto: confere o texto e devolve os lugares que combinam
router.get("/busca", function (req, res) {
  const resultado = validarTextoBusca(req.query.q);

  if (!resultado.valido) {
    return res.status(400).json({ erro: resultado.erro });
  }

  res.json(buscarLugares(resultado.texto));
});

module.exports = router;