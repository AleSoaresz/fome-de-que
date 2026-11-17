require("dotenv").config();
const app = require("./app");
const conectarBanco = require("./config/banco");

const PORTA = process.env.PORTA || 3000;

async function iniciar() {
  try {
    await conectarBanco();
  } catch (erro) {
    console.error("Não consegui conectar ao banco:", erro.message);
    process.exit(1);
  }

  app.listen(PORTA, function () {
    console.log("Servidor rodando em http://localhost:" + PORTA);
  });
}

iniciar();