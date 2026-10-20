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

function mostrarResposta() {
  const resposta = document.querySelectorAll(".pergunta-resposta");
  resposta.hidden = false;
}
