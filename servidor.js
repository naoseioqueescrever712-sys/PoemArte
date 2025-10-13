const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Pasta "public" para arquivos estáticos
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

// Rota pra pegar poemas
app.get('/poemas', (req, res) => {
  const poemas = JSON.parse(fs.readFileSync('./data/poemas.json'));
  res.json(poemas);
});

// Rota pra enviar novo poema
app.post('/enviar', (req, res) => {
  const { nome, titulo, texto } = req.body;
  const poemas = JSON.parse(fs.readFileSync('./data/poemas.json'));
  poemas.push({ nome, titulo, texto });
  fs.writeFileSync('./data/poemas.json', JSON.stringify(poemas, null, 2));
  res.redirect('/');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
