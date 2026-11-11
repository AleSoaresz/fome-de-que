const lugares = require("../lugares");

// Palavras comuns que não ajudam na busca
const PALAVRAS_IGNORADAS = ["com", "de", "do", "da", "e", "em", "para", "por"];

// Tira acentos e deixa tudo minúsculo, para "hamburguer" achar "hambúrguer"
function limpar(texto) {
  return texto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// Devolve os lugares que combinam com o texto, do que mais combina ao que menos combina
function buscarLugares(texto) {
  const palavras = limpar(texto).split(" ").filter(function (palavra) {
    return palavra.length > 2 && !PALAVRAS_IGNORADAS.includes(palavra);
  });

  return lugares
    .map(function (lugar) {
      const textoDoLugar = limpar(lugar.nome + " " + lugar.descricao + " " + lugar.tags.join(" "));
      const pontos = palavras.filter(function (palavra) {
        return textoDoLugar.includes(palavra);
      }).length;
      return { lugar: lugar, pontos: pontos };
    })
    .filter(function (item) { return item.pontos > 0; })
    .sort(function (a, b) { return b.pontos - a.pontos; })
    .map(function (item) { return item.lugar; });
}

module.exports = { buscarLugares };