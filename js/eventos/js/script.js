// 1 - Adicionando eventos

const btn = document.querySelector("#my-button");

btn.addEventListener("click", function () {
  console.log("Click");
});

// 2 - removendo eventos

const secondBtn = document.querySelector("#btn");

function imprimirMensagem() {
  console.clear();
  console.log("teste de evento");
}

secondBtn.addEventListener("click", imprimirMensagem);

const thirdBtn = document.querySelector("#other-btn");

thirdBtn.addEventListener("click", () => {
  console.log("evento removido");
  secondBtn.removeEventListener("click", imprimirMensagem);
});

// 3 - Argumento do evento

const title = document.querySelector("h1");

title.addEventListener("click", (event) => {
  console.log(event);
  console.log(event.offsetX, event.offsetY);
  console.log(event.pointerType);
  console.log(event.target);
});

// 4 - Evitando propagação

// com propagação

const container1 = document.querySelector("#container");
const btnContainer1 = document.querySelector("#btn-container");

container1.addEventListener("click", () => {
  console.log("Evento do container");
});

btnContainer1.addEventListener("click", () => {
  console.log("Evento do botão");
});

// sem propagação

const container2 = document.querySelector("#container2");
const btnContainer2 = document.querySelector("#btn-container2");

btnContainer2.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("Evento do botão");
});

container2.addEventListener("click", () => {
  console.log("Evento do container");
});

// 5 - Removendo evento padrão

const a = document.querySelector("a");

a.addEventListener("click", (e) => {
  e.preventDefault();

  alert("trolei, n tem google n bobo");
});

// 6 - eventos de teclado

document.addEventListener("keyup", (e) => {
  console.log(`soltou a telcla ${e.key}`);
});

// 7 - mouse
const mouseEvents = document.querySelector("#mouseEvents");

mouseEvents.addEventListener("mousedown", () => {
  console.log("Pressionou o botão do mouse");
});

mouseEvents.addEventListener("mouseup", () => {
  console.log("Soltou o botão do mouse");
});

mouseEvents.addEventListener("dblclick", () => {
  console.warn("ocorreu um bouble click");
});

// 7 - eventos de scroll

window.addEventListener("scroll", () => {
  console.log("evento de scroll!!!");

  if (window.pageYOffset > 200) {
    console.log("Passamos de 200px");
  }
});

// 8 - Eventos de foco e blur

const input = document.querySelector("#text");

function focus() {
  input.style.backgroundColor = "red";
}

input.addEventListener("focus", focus);

input.addEventListener("blur", () => {
  input.removeEventListener("focus", focus);
  input.style.backgroundColor = "white";
});

// debounce
