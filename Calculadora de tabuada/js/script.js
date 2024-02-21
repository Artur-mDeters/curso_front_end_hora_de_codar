// seleção de elementos
const multiplicationForm = document.querySelector("#multiplication-form");
const numberInput = document.querySelector("#number");
const multiplicatorInput = document.querySelector("#multiplicator");

const divResults = document.querySelector("#multiplications-operations");

// divResults.appendChild(table);

// funções

const createTable = (num, mult) => {
  divResults.innerHTML = "";
  for (let i = 1; i <= mult; i++) {
    const result = i * num;

    const template = `<div class="row">
        <div class="operation">${num} X ${i} =</div>
        <div class="result">${result}</div>
        </div>`;

    const parser = new DOMParser();

    const HTMLtemplate = parser.parseFromString(template, "text/html");

    const row = HTMLtemplate.querySelector(".row");

    divResults.appendChild(row);
  }
};

const noResults = (num) => {
  divResults.innerHTML =
    "<p>Informe um número diferente de 0 para calcular a sua tabuada...</p>";
};

// evento

multiplicationForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const number = +numberInput.value;
  const multiplicator = +multiplicatorInput.value;

  if (!number || !multiplicator) {
    noResults(number);
  } else {
    createTable(number, multiplicator)
  }
});
