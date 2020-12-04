const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

// Adiciona um ouvidor de eventos no botão "next" que aciona uma função
next.addEventListener('click', () => {
  // Incrementa "currentActive"
  currentActive++;
  // Se "currentActive" for maior que "circles.length", ele entra no bloco
  if (currentActive > circles.length) {
    // Atribui a "currentActive" o número de elementos contido em "circles"
    currentActive = circles.length;
  }
  // Chama a função "update"
  update();
});

// Adiciona um ouvidor de eventos no botão "prev" que aciona uma função
prev.addEventListener('click', () => {
  // Decrementa "currentActive"
  currentActive--;
  // Se "currentActive" for menor que 1 (0) ele entra no bloco
  if (currentActive < 1) {
    // Atribui a "currentActive" o valor 1
    currentActive = 1;
  }
  // Chama a função "update"
  update();
});


function update() {
  // Percorre os itens em "circles" e executa uma função, passando o item e o index
  circles.forEach((circle, index) => {
    // Digamos que "currentActive" tem valor "2" (fixo no momento da execução, mas pode variar entre 1 e 4 com o uso dos botões), ele irá pegar o index de cada elemento (circle) e verificar se é menor que "currentActive".
    
    // Na primeira execução, 0 é menor que 2, então passa e adiciona a classe "active" ao primeiro item de circles
    // Depois, 1 é menor que 2, então também passa e adiciona a classe ao segundo item
    // Já o index 2 não é menor igual a 2, então vai para else. E o index seguinte também (3) não passa, estilizando somente o índice 0 e 1.
    if (index < currentActive) {
      // Adiciona a classe "active" a "circle"
      circle.classList.add("active");
    } else {
      // Remove a classe "active" de "circle"
      circle.classList.remove("active");
    }
  });
  
  // Pega os elementos com a classe "active"
  const actives = document.querySelectorAll(".active");
  
  // Define o tamanho da barra de progresso (elementos com a classe "active")
  // "actives.length - 1" dividido por "circles.length -1" multiplicado por 100.
  progress.style.width = (actives.length -1) / (circles.length -1) * 100 + '%';
  
  
  // Se "currentActive" for igual a 1, ele entra no bloco
  if (currentActive === 1) {
    // Desabilita o botão prev
    prev.disabled = true;
    
  // Se "currentActive" for igual ao comprimento de circles, ele entra no bloco
  } else if (currentActive === circles.length) {
    // Desabilita o botão "next"
    next.disabled = true;
    
  // E se não for nenhum dos dois:
  } else {
    // Habilita os dois botões ("prev" e "next")
    prev.disabled = false;
    next.disabled = false;
  }
}