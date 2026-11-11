require("dotenv").config();
const app = require("./app");

const PORTA = process.env.PORTA || 3000;

app.listen(PORTA, function () {
  console.log("Servidor rodando em http://localhost:" + PORTA);
});