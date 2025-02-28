// Selecionar o botão de menu e o menu
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

// Adicionar evento de clique no botão do menu
menuToggle.addEventListener("click", () => {
  menu.classList.toggle("active"); // Alterna a visibilidade do menu
});
