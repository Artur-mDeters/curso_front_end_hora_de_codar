// setTimeout

console.log("ainda n executou");

setTimeout(function () {
  console.log("requisição assincrona");
}, 5000);

console.log("ainda n executou");

// // set interval

// console.log("ainda n começou");

// setInterval(function () {
//   console.log("intervalo infinito");
// }, 2000);

// console.log("ainda n começou");

// // promises

const promessa = Promise.resolve(5 + 5);

console.log("algum código");

promessa.then((value) => {
  console.log(`A soma é ${value}`);
  return value;
});

console.log("outro código");

// falha na promise

Promise.resolve(4 * "nan")
  .then((n) => {
    if (Number.isNaN(n)) {
      throw new Error("Valores Inválidos");
    }
  })
  .catch((err) => console.log(`Um erro ocorreu: ${err}`));

// rejeitando promisses

function checkNumber(n) {
  return new Promise((resolve, reject) => {
    if (n > 10) {
      resolve(`O número é maior que 10`);
    } else {
      reject(new Error("número Muito Baixo"));
    }
  });
}

const a = checkNumber(20);
const b = checkNumber(10);