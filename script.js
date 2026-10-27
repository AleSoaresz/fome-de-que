const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const nearBtn = document.getElementById('nearBtn');
const surpriseBtn = document.getElementById('surpriseBtn');
const loginBtn = document.getElementById('loginBtn');
const menuBtn = document.getElementById('menuBtn');
 
searchBtn.addEventListener('click', () => {
    const termo = searchInput.value.trim();
    if (termo === "") {
        alert("Por favor, digite o que você está com vontade de comer!");
        searchInput.focus();
        return;
    }
    alert(`Buscando por: "${termo}"...`);
});
 
nearBtn.addEventListener('click', () => {
    if (navigator.geolocation) {
        alert("Solicitando sua localização...");
        navigator.geolocation.getCurrentPosition(
            (position) => {
                alert(`Localização obtida! Lat: ${position.coords.latitude.toFixed(2)}, Lng: ${position.coords.longitude.toFixed(2)}`);
            },
            () => { alert("Não foi possível obter sua localização."); }
        );
    } else {
        alert("Geolocalização não suportada.");
    }
});
 
surpriseBtn.addEventListener('click', () => {
    alert("🎲 Sorteando 5 opções incríveis...");
});
 
loginBtn.addEventListener('click', () => {
    alert("Abrindo login com o Google...");
});
 
menuBtn.addEventListener('click', () => {
    alert("Abrindo menu lateral / perfil...");
});

// Lugares de TESTE (inventados, só para treinar a busca)
const lugares = [
  { nome: "Taverna do Valhalla", descricao: "Bar com tema viking e cerveja artesanal.", tags: ["viking", "cerveja", "bar", "carne"] },
  { nome: "Burger do Abacaxi", descricao: "Hambúrguer com abacaxi grelhado.", tags: ["hambúrguer", "abacaxi", "lanche"] },
  { nome: "Pizzaria Forno Antigo", descricao: "Pizza de calabresa no forno a lenha.", tags: ["pizza", "calabresa", "italiana"] },
  { nome: "Sushi da Esquina", descricao: "Rodízio de comida japonesa.", tags: ["sushi", "japonesa", "rodízio"] },
  { nome: "Cantinho Vegano", descricao: "Pratos veganos e sucos naturais.", tags: ["vegano", "saudável", "suco"] },
  { nome: "Churrascaria Fogo de Chão", descricao: "Carnes na brasa e buffet de saladas.", tags: ["churrasco", "carne", "buffet"] }
];

const campoBusca = document.getElementById("searchInput");
const botaoBuscar = document.getElementById("searchBtn");
const areaResultados = document.getElementById("results");

// Tira acentos e deixa tudo minúsculo, para "hamburguer" achar "hambúrguer"
function limpar(texto) {
  return texto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// Mostra uma mensagem simples na área de resultados
function mostrarMensagem(texto) {
  areaResultados.innerHTML = "";
  const p = document.createElement("p");
  p.className = "results-msg";
  p.textContent = texto;
  areaResultados.appendChild(p);
}

// Desenha os lugares na tela
function mostrarLugares(lista) {
  areaResultados.innerHTML = "";
  lista.forEach(function (lugar) {
    const cartao = document.createElement("div");
    cartao.className = "place-card";
    cartao.innerHTML =
      "<h3>" + lugar.nome + "</h3>" +
      "<p>" + lugar.descricao + "</p>" +
      lugar.tags.map(function (t) { return '<span class="place-tag">' + t + "</span>"; }).join("");
    areaResultados.appendChild(cartao);
  });
}

// Faz a busca
function buscar() {
  const textoDigitado = limpar(campoBusca.value.trim());
  if (textoDigitado === "") {
    mostrarMensagem("Digite o que você quer comer. Ex.: hambúrguer com abacaxi");
    return;
  }

  // Palavras pequenas e comuns não ajudam na busca
  const ignorar = ["com", "de", "do", "da", "e", "em", "para", "por"];
  const palavras = textoDigitado.split(" ").filter(function (p) {
    return p.length > 2 && !ignorar.includes(p);
  });

  // Conta quantas palavras combinam com cada lugar
  const encontrados = lugares
    .map(function (lugar) {
      const textoDoLugar = limpar(lugar.nome + " " + lugar.descricao + " " + lugar.tags.join(" "));
      const pontos = palavras.filter(function (p) { return textoDoLugar.includes(p); }).length;
      return { lugar: lugar, pontos: pontos };
    })
    .filter(function (item) { return item.pontos > 0; })
    .sort(function (a, b) { return b.pontos - a.pontos; })
    .map(function (item) { return item.lugar; });

  if (encontrados.length === 0) {
    mostrarMensagem("Não achei nada com isso. Tente outra palavra.");
  } else {
    mostrarLugares(encontrados);
  }
}

botaoBuscar.addEventListener("click", buscar);
campoBusca.addEventListener("keydown", function (evento) {
  if (evento.key === "Enter") buscar();
});

// Botão "Me surpreenda": sorteia até 5 lugares da lista
const botaoSurpresa = document.getElementById("surpriseBtn");

function surpreender() {
  const embaralhados = lugares.slice().sort(function () {
    return Math.random() - 0.5;
  });
  mostrarLugares(embaralhados.slice(0, 5));
}

botaoSurpresa.addEventListener("click", surpreender);