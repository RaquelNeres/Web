// Este código deve ser inserido em um arquivo .js externo (melhor prática) ou em uma tag <script>
function toggleDropdown() {
  // 1. Encontra o conteúdo do menu usando a classe
  var menu = document.querySelector(".dropdown-content");
  
  // 2. Alterna a classe 'show' (se tiver, remove; se não tiver, adiciona)
  menu.classList.toggle("show");
}

// 3. Adiciona um "listener" de evento de clique ao link "Conteudo" (usando seu ID #aulas)
var botaoConteudo = document.getElementById("aulas");

if (botaoConteudo) {
    // Evita que o link # no href navegue para o topo da página
    botaoConteudo.addEventListener('click', function(event) {
        event.preventDefault();
        toggleDropdown();
    });
}