// métodos

const animal = {
  name: "Bob",
  latir: function () {
    console.log("Au au");
  },
};

console.log(animal);

animal.latir(2);

// aprofundando em métodos

const pessoa = {
  name: "Artur",

  getName: function () {
    return this.name;
  },

  setName: function (newName) {
    this.name = newName;
  },
};

console.log(pessoa.name);

console.log(pessoa.getName());

pessoa.setName("Artur da Motta Deters");

console.log(pessoa.name);

// Prototype (fallback);

const text = "ads";

console.log(Object.getPrototypeOf(text));

const bool = true;

console.log(Object.getPrototypeOf(bool));

// mais sobre prototype
const myObject = {
  a: "b",
};

console.log(Object.getPrototypeOf(myObject));

// classes básicas

const cachorro = {
  raca: null,
};

const pastorAlemao = Object.create(cachorro);

pastorAlemao.raca = "Pastor Alemão";

console.log(cachorro);
console.log(pastorAlemao);

// funções construtoras;

function criarCachorro(nome, raca) {
  const cachorro = Object.create({});

  cachorro.nome = nome;
  cachorro.raca = raca;

  return cachorro;
}

const bob = criarCachorro("bob", "rotwiller");

console.log(bob);

// classes baseadas em funções

function Cachorro(nome, raca) {
  this.nome = nome;
  this.raca = raca;
}

const husky = new Cachorro("gudan", "husky");
console.log(husky);

// classes de função com métodos

Cachorro.prototype.uivar = function () {
  console.log("Auuuuuu!!!");
};

husky.uivar();

// classes ES6...

class CachorroClasse {
  constructor(nome, raca) {
    this.nome = nome;
    this.raca = raca;
  }
}

const jeff = new CachorroClasse("jeff", "border Collie");
console.log(jeff);

// Mais sobre as classes
class Caminhao {
  constructor(eixos, cor, carga, peso, rota, condutor) {
    this.eixos = eixos;
    this.cor = cor;
    this

  }

  descreverCaminhao() {
    console.log(`Este caminhão tem ${this.eixos} eixos e é da cor ${this.cor}`);
  }
}

const scania = new Caminhao(6, "vermelha");
const volvo = new Caminhao(8, "branca");

console.log(scania);
console.log(volvo);
console.log(scania.descreverCaminhao());
console.log(volvo.descreverCaminhao());

class Caminhao {
  constructor(eixo, cor, condutor, peso, carga, rota) {
    this.eixo = eixo;
    this.cor = cor;
    this.condutor = condutor;
    this.peso = peso;
    this.carga = carga;
    this.rota = rota;
  }
  descCaminhao() {
    console.log(`Este caminhão tem ${this.eixo} eixos e é da cor ${this.cor}`);
  }
  descRota() {
    console.log(
      `Carga de ${this.peso} toneladas de ${this.carga} levadas por ${this.condutor} para ${this.rota}`
    );
  }
}

// const volvo = new Caminhao(
//   6,
//   "preta",
//   "Josefindo Pinto",
//   40,
//   "Soja",
//   "Curitiba/sc"
// );
// console.log(volvo);

// volvo.descCaminhao();
// volvo.descRota();

// override nas propriedades via prototype

class Humano {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
}

const artur = new Humano("Artur", 18);

console.log(artur);

// Symbols em Classes
class Aviao {
  constructor(marca, motor) {
    this.marca = marca;
    this.motor = motor;
  }
}

const asas = Symbol();
const pilotos = Symbol();

Aviao.prototype[asas] = 2;
Aviao.prototype[pilotos] = 3;

const boeing = new Aviao("boeing", 4);

console.log(boeing);

console.log(boeing[asas])

console.log(boeing[pilotos])

// getter setter

class Post {
  constructor(title, description, tags) {
    this.title = title;
    this.description = description;
    this.tags = tags;
  }

  get exTitulo() {
    return `Voce está lendo ${this.title}`;
  }

  set addTags(tags) {
    const tagsArray = tags.split(", ")
    this.tags = tagsArray
  }
}

const myPost = new Post(
  "Meu primeiro Post",
  "descrição do post inasd aisdn asjkne anasdj "
);

console.log(myPost);
console.log(myPost.exTitulo);

myPost.addTags = "#programacao, #js, #cursofrontEnd";

console.log(myPost);

// Herança em js (extends, super)

class Mamifero {
    constructor(patas) {
        this.patas = patas;
    }
}

class Lobo extends Mamifero {
    constructor(patas, nome) {
        super(patas, patas);
        this.nome = nome;
    }
}


const shark = new Lobo(4, "shark");

console.log(shark);

// instanceof

console.log(shark instanceof Lobo);
console.log(shark instanceof Mamifero);
console.log(Lobo instanceof Mamifero);
console.log(new Lobo(4, "teste") instanceof Mamifero);

class Carro {
  constructor (marca, modelo, preco, portas) {
    this.marca = marca;
    this.modelo = modelo;
    this.preco = preco;
    this.portas = portas;
  }
  descreverCarro() {
    alert(`O carro desejado é da marca ${this.marca}, `)
  }
}