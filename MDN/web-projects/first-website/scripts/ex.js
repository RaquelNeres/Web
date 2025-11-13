// variavel recebendo referencias a <li>
const listItems = document.querySelectorAll("li");

// função adiciona o 'done' de css para um item que ainda n o possua
// e o remove caso o possua
function toggleDone(e) {
  if (!e.target.className) { // se o elemento nao possuir className
    e.target.className = "done";
  } else {
    e.target.className = "";
  }
}

// percorre os itens da variavel, item é cada elemento da variavel
listItems.forEach((item) => {
  // espera o evento 'click' e aciona a função
  item.addEventListener("click", toggleDone);
});