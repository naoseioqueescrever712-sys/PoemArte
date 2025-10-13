const form = document.getElementById('formPoema');
const lista = document.getElementById('poemas');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value;
  const titulo = document.getElementById('titulo').value;
  const texto = document.getElementById('texto').value;

  const div = document.createElement('div');
  div.className = 'poema-card';
  div.innerHTML = `<h3>${titulo}</h3><p>Autor: ${nome}</p><p>${texto.replace(/\n,'<br>')}</p>`;
  lista.appendChild(div);

  form.reset();
});
