// select por tag   [[[[[[[[[[[[]]]]]]]]]]]]

const listitems = document.getElementsByTagName("li");

console.log(listitems);

// select por id   [[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]

const title = document.getElementById("title");

console.log(title);

// select elemetns by class  [[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]

const products = document.getElementsByClassName("product");

console.log(products);

// select elements by css elements ( mais utilizado ) [[[[[[[[[[]]]]]]]]]]

const productsQuery = document.querySelectorAll(".product");

console.log(productsQuery);

const mainContainer = document.querySelector("#main-container");

console.log(mainContainer);

// Alterando o HTML com o DOM [[[[[[[[[[[[[[]]]]]]]]]]]]]]

// InsertBefore

const p = document.createElement("p");

const header = title.parentElement;

header.insertBefore(p, title);

// appendChild

const navLinks = document.querySelector(" nav ul ");

const li = document.createElement("li");

navLinks.appendChild(li);

// replaceChild

// create text node

const myText = document.createTextNode("meu texto com text node");

const h3 = document.createElement("h3");

h3.appendChild(myText);

mainContainer.appendChild(h3);

// trabalhando com atributos

const firstLink = navLinks.querySelector("a");

firstLink.setAttribute("href", "https://www.youtube.com");

firstLink.setAttribute("target", "_blank");

// Altura e largura

const footer = document.querySelector("footer");

// posição do elemento

const product1 = products[0];
console.log(product1.getBoundingClientRect());

// alterando estilos com js

mainContainer.style.color = "red";
mainContainer.style.backgroundColor = "#ddd"
mainContainer.style.border = "1px solid black"

// alterando estilos de vários elementos

for(const li of listitems) {
    li.style.backgroundColor = `#aaa`
}