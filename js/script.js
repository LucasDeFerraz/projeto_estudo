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

