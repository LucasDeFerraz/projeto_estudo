const links = document.querySelectorAll("header nav a");
console.log(links);
links.forEach(ativarLink);
function ativarLink(link) {
  const href = link.href;
  const url = location.href;
  if (url === href) {
    link.style.color = "#FBB704";
  }
}

const botaoPergunta = document.querySelectorAll(".pergunta-titulo");

botaoPergunta.forEach(AtivarPergunta);


function AtivarPergunta(botao) {
  botao.addEventListener("click", mostrarResposta);
}

function mostrarResposta(event) {
  const resposta = event.currentTarget;
  const controls = resposta.getAttribute('aria-controls');
  const objeto = document.getElementById(controls);
  objeto.classList.toggle('ativo');
  const ativa = objeto.classList.contains('ativo')
  objeto.setAttribute('aria-expanded', ativa);
}

const galeria = document.querySelectorAll('.nimbus-galeria img');
const galeriaContainer = document.querySelector('.nimbus-galeria');

galeria.forEach(eventosGaleria)


function trocarImagem(event) {
  const img = event.currentTarget;
  matchMedia('(min-width:1000px)');
  galeriaContainer.prepend(img)
}

function eventosGaleria(imagem) {
  imagem.addEventListener('click', trocarImagem)
}
