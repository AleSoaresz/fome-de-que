# Fome de Quê?

Site para achar onde comer pela vontade do momento, e não só pelo tipo de comida. Dá para buscar "hambúrguer com abacaxi" ou "bar viking com cerveja", ou pedir uma sugestão quando não se sabe o que quer.

Ainda está em construção. Os lugares que aparecem hoje são inventados, só para testar a busca. Os lugares reais de Brasília entram quando o banco de dados estiver pronto.

## Por que estou fazendo

Gosto de sair para comer, e quis juntar isso com programação. O projeto me serve para praticar o que já sei e aprender o que ainda não sei, com apoio de IA (Claudinho tá me ajudando bastante). O objetivo é chegar a um sistema que funcione de verdade para os usuários, e não parar no exercício.

## O que já funciona

- Busca por texto e tags. Ignora acentos, maiúsculas e palavras como "com" e "de".
- Quando a busca não acha nada, o site sugere alguns lugares.
- "Me surpreenda" sorteia até 5 lugares.
- "O que tem por perto?" pede a localização ao navegador e ordena os lugares do mais perto ao mais longe.
- O servidor confere o texto da busca antes de usar e devolve uma mensagem de erro quando ele não serve.

## Tecnologias

O site é feito em HTML, CSS e JavaScript puro. O servidor usa Node.js com Express (mais CORS e dotenv). O banco será o MongoDB, o login será com Google, e a ideia é publicar o site no Netlify e o servidor no Render.

## Estrutura

```
fome-de-que/
├── index.html
├── style.css
├── script.js
└── servidor/
    ├── server.js          # liga o servidor na porta
    ├── app.js             # monta o servidor (CORS e rotas)
    ├── rotas/api.js       # rotas da API
    ├── servicos/busca.js  # lógica da busca
    ├── utils/validacao.js # validação do texto digitado
    ├── lugares.js         # lugares de teste (vão sair quando o banco entrar)
    └── .env.example       # modelo das configurações
```

## Como rodar

Você precisa do Node.js (versão LTS), do Git e do VS Code com a extensão Live Server.

Baixe o projeto e entre na pasta do servidor:

```
git clone https://github.com/AleSoaresz/fome-de-que.git
cd fome-de-que/servidor
```

Instale as dependências:

```
npm install
```

Crie o arquivo de configuração a partir do modelo (no Mac ou Linux, use `cp` no lugar de `copy`):

```
copy .env.example .env
```

Ligue o servidor, que sobe em `http://localhost:3000`:

```
npm run dev
```

Por fim, abra o `index.html` com o Live Server (botão direito no arquivo e "Open with Live Server"). O site abre em `http://localhost:5500`.

## API

O endereço base é `http://localhost:3000`.

### GET /api/lugares

Devolve todos os lugares cadastrados:

```json
[
  {
    "nome": "Burger do Abacaxi",
    "descricao": "Hambúrguer com abacaxi grelhado.",
    "tags": ["hambúrguer", "abacaxi", "lanche"],
    "lat": -15.7801,
    "lng": -47.9292
  }
]
```

### GET /api/busca?q=texto

Procura nos nomes, descrições e tags, e devolve os lugares do que mais combina ao que menos combina. Se nada combinar, a lista vem vazia.

O parâmetro `q` é obrigatório, aceita até 50 caracteres e só pode ter letras (com acento), números, espaços e hífen. Quando o texto é recusado, a resposta é um erro `400` com o motivo:

```json
{ "erro": "Digite algo para buscar." }
```

As mensagens possíveis são:

- `Digite algo para buscar.` (texto vazio)
- `Use no máximo 50 caracteres.`
- `Use só letras, números, espaços e hífen.` (por exemplo, com `<script>`)
- `Envie um único texto de busca.` (parâmetro ausente ou repetido)

## O que falta

- Banco de dados MongoDB com lugares reais de Brasília
- Publicar o site na internet
- Página do lugar, com fotos e botão para abrir no Waze
- Avaliações com estrelas e comentários
- Login com Google
- App para celular

## Contato

Alexandre Rodrigues Soares, de Brasília-DF.
[GitHub](https://github.com/AleSoaresz) · [LinkedIn](https://www.linkedin.com/in/alexandre-rodrigues-9b8721312)