const loginBtn = document.getElementById('loginBtn');
const menuBtn = document.getElementById('menuBtn');

loginBtn.addEventListener('click', () => {
    alert("Abrindo login com o Google...");
});

menuBtn.addEventListener('click', () => {
    alert("Abrindo menu lateral / perfil...");
});

const campoBusca = document.getElementById("searchInput");
const botaoBuscar = document.getElementById("searchBtn");
const areaResultados = document.getElementById("results");

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

    let distanciaHtml = "";
    if (lugar.distancia !== undefined) {
      distanciaHtml = "<p>📍 a " + lugar.distancia.toFixed(1).replace(".", ",") + " km de você</p>";
    }

    cartao.innerHTML =
      "<h3>" + lugar.nome + "</h3>" +
      "<p>" + lugar.descricao + "</p>" +
      distanciaHtml +
      lugar.tags.map(function (t) { return '<span class="place-tag">' + t + "</span>"; }).join("");
    areaResultados.appendChild(cartao);
  });
}

// Quando a busca não acha nada: avisa e sugere 3 lugares da lista
function mostrarSemResultado() {
  const sugestoes = lugares
    .slice()
    .sort(function () { return Math.random() - 0.5; })
    .slice(0, 3);

  mostrarLugares(sugestoes);

  const aviso = document.createElement("p");
  aviso.className = "results-msg";
  aviso.textContent = "Nada encontrado. Tente outro ingrediente ou prato. Enquanto isso, que tal esses lugares?";  
  areaResultados.insertBefore (aviso, areaResultados.firstChild);
}

// Faz a busca: pergunta ao servidor
async function buscar() {
  const texto = campoBusca.value.trim();
  if (texto === "") {
    mostrarMensagem("Digite o que você quer comer. Ex.: hambúrguer com abacaxi");
    return;
  }

  mostrarMensagem("Buscando...");

  try {
    const resposta = await fetch(URL_SERVIDOR + "/api/busca?q=" + encodeURIComponent(texto));
    const dados = await resposta.json();

    if (!resposta.ok) {
      mostrarMensagem(dados.erro || "Algo deu errado. Tente de novo.");
      return;
    }

    if (dados.length === 0) {
      mostrarSemResultado();
    } else {
      mostrarLugares(dados);
    }
  } catch (erro) {
    mostrarMensagem("Não consegui falar com o servidor. Ele está ligado?");
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

// Botão "O que tem por perto?": ordena os lugares do mais perto ao mais longe
const botaoPerto = document.getElementById("nearBtn");

// Fórmula que calcula a distância (em km) entre dois pontos da Terra
function calcularDistanciaKm(lat1, lng1, lat2, lng2) {
  const raioTerra = 6371;
  const paraRadianos = function (graus) { return graus * Math.PI / 180; };
  const difLat = paraRadianos(lat2 - lat1);
  const difLng = paraRadianos(lng2 - lng1);
  const a = Math.sin(difLat / 2) * Math.sin(difLat / 2) +
            Math.cos(paraRadianos(lat1)) * Math.cos(paraRadianos(lat2)) *
            Math.sin(difLng / 2) * Math.sin(difLng / 2);
  return raioTerra * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function buscarPerto() {
  if (!navigator.geolocation) {
    mostrarMensagem("Seu navegador não consegue descobrir a localização.");
    return;
  }
  mostrarMensagem("Descobrindo onde você está...");

  navigator.geolocation.getCurrentPosition(
    function (posicao) {
      const minhaLat = posicao.coords.latitude;
      const minhaLng = posicao.coords.longitude;

      const ordenados = lugares
        .map(function (lugar) {
          const km = calcularDistanciaKm(minhaLat, minhaLng, lugar.lat, lugar.lng);
          return Object.assign({}, lugar, { distancia: km });
        })
        .sort(function (a, b) { return a.distancia - b.distancia; });

      mostrarLugares(ordenados);
    },
    function () {
      mostrarMensagem("Não consegui pegar sua localização. Confira se você clicou em Permitir.");
    }
  );
}

botaoPerto.addEventListener("click", buscarPerto);

let lugares = [];
const URL_SERVIDOR = "http://localhost:3000";

async function carregarLugares() {
  try {
    const resposta = await fetch(URL_SERVIDOR + "/api/lugares");
    lugares = await resposta.json();
  } catch (erro) {
    mostrarMensagem("Não consegui falar com o servidor. Ele está ligado?");
  }
}

carregarLugares();