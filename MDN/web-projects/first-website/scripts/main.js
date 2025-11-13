// Ação por click
/* 
// Store a reference to the <h1> in a variable
const myHeading = document.querySelector("h1");
// Update the text content of the <h1>
myHeading.textContent = "Hello world!";
*/

// -----------------------------------------------------------

// Ação de mudança de imagem
// nao pega todas as imagens do site porque nao tem 'ALL'
const myImage = document.querySelector("img");
// const myImage = document.querySelector("#fotoPrincipal");

myImage.addEventListener("click", () => {
    // pegar o atributo do src atribuido a img
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/image.webp") {
    myImage.setAttribute("src", "images/lingua.jpeg");
  } else {
    myImage.setAttribute("src", "images/image.webp");
  }
});

// -----------------------------------------------------------

// Mensagem de boas-vindas
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

// garantir que vai ser digitado um nome
function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName); // armazenando o valor na var "name" internamente
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
}

// executa na 1 vez que abre a pag
if (!localStorage.getItem("name")) { // se nao existe, cria
  setUserName();
} else {
  // se existe pega o valor armazenado internamente
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

// ao clicar aciona o função pra mudar o nome
myButton.addEventListener("click", () => {
  setUserName();
});

