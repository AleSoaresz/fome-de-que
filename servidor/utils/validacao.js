const LIMITE_CARACTERES = 50;

// Confere o texto digitado pela pessoa antes de usar.
// Devolve { valido: true, texto } se estiver ok, ou { valido: false, erro } se não estiver.
function validarTextoBusca(entrada) {
  if (typeof entrada !== "string") {
    return { valido: false, erro: "Envie um único texto de busca." };
  }

  const texto = entrada.trim();

  if (texto === "") {
    return { valido: false, erro: "Digite algo para buscar." };
  }
  if (texto.length > LIMITE_CARACTERES) {
    return { valido: false, erro: "Use no máximo " + LIMITE_CARACTERES + " caracteres." };
  }
  // Só aceita letras (com acento), números, espaços e hífen
  if (!/^[\p{L}\p{N} -]+$/u.test(texto)) {
    return { valido: false, erro: "Use só letras, números, espaços e hífen." };
  }

  return { valido: true, texto: texto };
}

module.exports = { validarTextoBusca };