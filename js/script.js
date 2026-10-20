const links = document.querySelectorAll("header nav a");

function ativarLink(item) {
  const paginaDoLink = new URL(item.href).pathname;
  const paginaAtual = location.pathname;
  const paginaDeBicicleta = /\/bicicletas\/[^/]+\.html$/.test(paginaAtual);
  const linkDeBicicletas = paginaDoLink.endsWith("/biciletas.html");

  if (paginaAtual === paginaDoLink || (paginaDeBicicleta && linkDeBicicletas)) {
    item.setAttribute("aria-current", "page");
  }
}

links.forEach(ativarLink);
