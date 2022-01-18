let order = [];
let clickedOrder = [];
let score = 0;

const blue = document.querySelector(".blue");
const red = document.querySelector(".red");
const yellow = document.querySelector(".yellow");
const green = document.querySelector(".green");

let aleatoryOrder = () => {
  let colorOrder = Math.floor(Math.random() * 4);
  order[order.length] = colorOrder;
  clickedOrder = [];
  for (let i in order) {
    let elementColor = createColorElement(order[i]);
    lightColor(elementColor, Number(i) + 1);
  }
};
let lightColor = (element, number) => {
  number = number * 500;
  setTimeout(() => {
    element.classList.add("selected");
  }, number - 250);

  setTimeout(() => {
    element.classList.remove("selected");
  });
};

let checkOrder = () => {
  for (let i in clickedOrder) {
    if (clickedOrder[i] != order[i]) {
      gameOver();
      break;
    }
  }
  if (clickedOrder.length == order.length) {
    alert(`Pontuação: ${score}\n Você acertou! Iniciando próximo nivel!`);
    nextLevel();
  }
};
let click = (color) => {
  clickedOrder[clickedOrder.length] = color;
  createColorElement(color).classList.add("selected");
  setTimeout(() => {
    createColorElement(color).classList.remove("selected");
    checkOrder();
  }, 250);
};
let createColorElement = (color) => {
  switch (color) {
    case 0:
      return green;
      break;
    case 1:
      return red;
      break;
    case 2:
      return yellow;
      break;
    case 3:
      return blue;
      break;
    default:
      break;
  }
};
let nextLevel = () => {
  score++;
  aleatoryOrder();
};
let gameOver = () => {
  alert(
    `Pontuação: ${score}!\nVocê perdeu o jogo"\nClique em Ok para iniciar um novo jogo`
  );
  order = [];
  clickedOrder = [];
  playGame();
};
let playGame = () => {
  alert("Bem vindo ao Gênesis! Iniciando um novo jogo");
  score = 0;
  nextLevel();
};
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

playGame();
