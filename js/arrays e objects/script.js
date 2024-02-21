// // array

// const lista = [1, 2, 3, 4, 5, 6, 7, 8];

// console.log(lista);
// console.log(typeof lista);

// const lista2 = [1, "teste", 12.3, [12, 23], 2 + 2, 2 + "3", true, false];

// console.log(lista2);
// console.log(typeof lista2);

// // mais sobre arrays

// const arr = ["a", "b", "c", "d", "e"];

// console.log(arr[1]); // b
// console.log(arr[3]); // d
// console.log(arr[0]); // a
// console.log(arr[12]); // undefined

// // propriedades

// const numbers = [1, 2, 3, 4, 5];

// console.log(numbers.length); // ler a quantidade de elementos

// console.log(numbers["length"]);

// const myName = "Artur da Motta Deters";

// console.log(myName.length); // le a quantidade de caracteres

// // metodos

// const otherNumbers = [1, 2, 3, 4, 5, 6];

// const allNumbers = numbers.concat(otherNumbers);

// console.log(allNumbers);

// const txt = "algum texto";

// console.log(txt.toUpperCase());
// console.log(txt.toLowerCase());

// console.log(typeof txt.toUpperCase());

// console.log(txt.lastIndexOf("t"));

// // object literals

// const person = {
//   name: "Matheus",
//   age: 31,
//   job: "developer",
// };

// console.log(person);
// console.log(person.age);
// console.log(person.name.lastIndexOf("h"));

// console.log(typeof person);

// // remover e criar novas propriedades

// const car = {
//   engine: 2.0,
//   brand: "vw",
//   model: "Tiguan",
//   km: 2000,
// };

// console.log(car);

// car.doors = 4;

// console.log(car);

// // mais sobre objetos

// const obj = {
//     a: "teste",
//     b: true,
// };

// console.log(obj instanceof Object);

// const obj2 = {
//     c: [1, 2, 3],
// };

// Object.assign(obj2, obj);

// console.log(obj2);

// // conhecendo melhor os objetos

// console.log(Object.keys(obj));
// console.log(Object.keys(obj2));
// console.log(Object.keys(car));

// console.log(Object.entries(car));

// // mutação 

// const a = {
//     name: "Artur"
// };

// const b = a;

// console.log(a);
// console.log(b);

// console.log(a===b);

// a.age = 18;

// console.log(a);
// console.log(b);
// console.log(a===b);

// delete b.age;

// console.log(a);
// console.log(b);
// console.log(a===b);

// // loops em arrays

// const users = ["matheus", "joão", "pedro", "Artur"];

// for (let cont = 0; cont < users.length; cont++) {
//     console.log(`Listando o usuário: ${users[cont].toUpperCase()}`);
// };

// // push e pop

// const array = ["a", "b", "c"];
// console.log(array);

// // push adiciona no final da lista
// array.push("d");
// array.push("e");

// array.push("f", "g", "h");
// console.log(array);


// // pop remove no final da lista
// array.pop();
// console.log(array);

// let itemRemovido = array.pop();

// console.log(itemRemovido);
// console.log(array);

// // shift e unshift 

// array.shift(); // remove o primeiro item da lista
// console.log(array);

// itemRemovido = array.shift();
// console.log(`O item removido é: ${itemRemovido}`, array);

// array.unshift("adiciona")   // adiciona um item ao primeiro lugar da lista
// console.log(array);

// array.unshift("1", 1, "2", 2);
// console.log(array);

// // indexOF e lastIndexOF retorna o Índice do elemento

// // slice 


// // inclides 

const brands = ["porsche", "bmw", "mustang"];

console.log(brands.includes("bmw"));
console.log(brands.includes("Fiat"));

if (brands.includes("porsche")) {
    console.log("á carros da marca Porsche!!");
}

// Reverse

const reverseTest = [1, 2, 3, 4, 5, 6];

console.log(reverseTest);

reverseTest.reverse();

console.log(reverseTest);

// JSON

const myJson = '{"name": "Artur", "age": 18, "job": "web developer"}';

// JSON PARA OBJETO e OBJETO PARA JSON

const myObject = JSON.parse(myJson);

console.log(myJson);
console.log(myObject);

const myNewJson = JSON.stringify(myObject);

console.log(myNewJson);