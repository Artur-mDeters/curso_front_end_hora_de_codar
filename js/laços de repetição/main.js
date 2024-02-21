// Laços de repetição 

// while

let cont = 0;

while (cont < 20) {
    console.warn(cont);
    cont++; // essa linha é essencial pro looping não virar um looping infinito
}

// do while

let cont2 = 0;

do {
    console.log(`valor de cont2: ${cont2}`);
    cont2++;
} while (cont2 < 20);

// for [ for (variavel; condição; incrementador) { código }]

for(let f = 0; f < 5; f++) {
    console.error(`valor de f: ${f}`);
}

for(let a = 12; a > 1; a--) {
    console.log(`O valor de a: ${a}`);
}
