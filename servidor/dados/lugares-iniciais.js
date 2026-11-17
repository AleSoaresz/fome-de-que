// lugares reais de Brasília, que vão para o banco de dados
// lat = latitude, lng = longitude (dados tirados do Google Maps)
const lugaresIniciais = [
  {
    nome: "IVV Swinebar",
    descricao: "Bar de vinhos e tapas com menu requintado focado em preparos de carne de porco.",
    tags: ["Vinho", "Carne Suína", "Gastronomia Criativa", "Ambiente Intimista"],
    endereco: "Asa Norte CLN 314 Lj 21 - Asa Norte, Brasília - DF, 70767-530",
    lat: -15.744001,
    lng: -47.894625
  },
  {
    nome: "Same Same But Different",
    descricao: "Gastronomia que mistura pratos autênticos do Vietnã, Tailândia e Coreia com um toque brasileiro.",
    tags: ["Asiática", "Fusão", "Comida de Rua", "Descontraído"],
    endereco: "29, SHCS CLS 402, Brasília - DF, 70236-530",
    lat: -15.808616,
    lng: -47.885545
  },
  {
    nome: "Teta Cheese Bar",
    descricao: "Bar intimista focado em queijos artesanais nacionais, vinhos e pratos criativos.",
    tags: ["Queijos Artesanais", "Vinhos", "Gastronomia Apurada", "Boemia"],
    endereco: "Asa Sul CLS 103 BL B Loja 34 - Asa Sul, Brasília - DF, 70342-020",
    lat: -15.806649,
    lng: -47.89316
  },
  {
    nome: "Romã Cozinha Autoral",
    descricao: "Espaço de cozinha autoral contemporânea, ideal para paladares que buscam surpresas fora das grandes redes.",
    tags: ["Autoral", "Contemporânea", "Exclusivo"],
    endereco: "Asa Sul CRS 505 Banca entre os Blocos B e C - Asa Sul, Brasília - DF, 70350-500",
    lat: -15.807134,
    lng: -47.899824
  },
  {
    nome: "Restaurante Universal",
    descricao: "Delícias criativas com um toque brasileiro servidas em um ambiente com decoração divertida.",
    tags: ["Criativo", "Fusão", "Decoração Divertida", "Badalado"],
    endereco: "Asa Sul Comércio Local Sul 210 - Asa Sul, Brasília - DF, 70273-530",
    lat: -15.823261,
    lng: -47.905032
  },
  {
    nome: "Saveur Bistrot",
    descricao: "Bistrô intimista especializado em carnes inusitadas e clássicos contemporâneos bem executados.",
    tags: ["Bistrô", "Carnes Especiais", "Reserva Antecipada"],
    endereco: "Asa Sul Comércio Local Sul 404 BL B LOJA 35 - Asa Sul, Brasília - DF, 70238-520",
    lat: -15.813656,
    lng: -47.890173
  },
  {
    nome: "Bloco C",
    descricao: "Restaurante autoral moderno que ressignifica pratos e ingredientes clássicos da mesa brasileira.",
    tags: ["Autoral", "Sofisticado", "Mezanino"],
    endereco: "Asa Sul CLS 211 bloco C loja 17 - Asa Sul, Brasília - DF, 70274-530",
    lat: -15.826432,
    lng: -47.910026
  },
  {
    nome: "Taypá",
    descricao: "Referência em alta gastronomia peruana com pratos tradicionais e contemporâneos em um ambiente elegante.",
    tags: ["Peruana", "Ceviche", "Terraço"],
    endereco: "St. de Habitações Individuais Sul QI 17 BI.G, Lj.208 - Lago Sul, Brasília - DF, 71645-500",
    lat: -15.86057,
    lng: -47.872289
  },
  {
    nome: "Restaurante New Koto",
    descricao: "Espaço acolhedor que foca no puro tradicionalismo japonês, sem fusões modernas.",
    tags: ["Japonesa Tradicional", "Autêntico", "Sushi Bar"],
    endereco: "Asa Sul Comércio Local Sul 212 BL C LOJA 20 - Asa Sul, Brasília - DF, 70275-530",
    lat: -15.827255,
    lng: -47.910251
  },
  {
    nome: "Quituart",
    descricao: "Complexo boêmio e gastronômico que mistura desde acarajé a pratos nórdicos em ambiente super animado.",
    tags: ["Boemia", "Feira Gastronômica", "Cerveja Artesanal", "Variedade"],
    endereco: "Shin, Canteiro Central QI 09/10 - Lago Norte, Brasília - DF, 71515-200",
    lat: -15.742823,
    lng: -47.852228
  }
];

module.exports = lugaresIniciais;