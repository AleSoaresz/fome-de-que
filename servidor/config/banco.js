const mongoose = require("mongoose");

async function conectarBanco() {
  const endereco = process.env.MONGODB_URI;

  if (!endereco) {
    throw new Error("Falta a variável MONGODB_URI no arquivo .env");
  }

  await mongoose.connect(endereco);
  console.log("Banco de dados conectado.");
}

module.exports = conectarBanco;