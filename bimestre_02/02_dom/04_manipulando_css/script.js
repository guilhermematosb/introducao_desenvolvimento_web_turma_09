//  Alterar o estilo de um elemento
function changeColor() {
  const text = document.getElementById("text");
  text.style.color = "blue"; // Altera a cor do texto para azul
}

// Adicionar e remover classes
function toggleStyle() {
  const button = document.getElementById("toggleBtn");
  button.classList.toggle("active"); // Adiciona ou remove a classe 'active'
}

// Alterar várias propriedades de estilo
function styleBox() {
  const box = document.getElementById("box");
  box.style.border = "2px solid black";
  box.style.backgroundColor = "lightcoral";
  box.style.padding = "20px";
}
