const links = document.querySelectorAll("header nav li a");
function ativarLink(item) {
  const href = item.href;
  const url = location.href;
  if (url.includes(href)) {
    item.style.color = "red";
  }
}

links.forEach(ativarLink);
