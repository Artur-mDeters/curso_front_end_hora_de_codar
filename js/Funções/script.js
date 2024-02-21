// Funções normais

function FuncaoNormal() {
    console.log('teste de função com js');
}

FuncaoNormal();
// função com variável

const FuncaoEmVariavel = function () {
    console.log('Função em fariavel');
}

FuncaoEmVariavel();

function FuncaoComParametro(txt) {
    console.error(`Erro ---> ${txt}`);
}

FuncaoComParametro('teste de funções sem valor retornado');
FuncaoComParametro('Inicialização da API');

const a = 1;
const b = 2;
const c = 3;
const d = 4;
const e = 5 
;


function soma(n1, n2) {
    return n1 + n2;
};

console.log(soma(a, b));
console.log(typeof soma(c, e));


const nentendi = (n,m) => {
    if (n < 10) {
        console.log('A função chegou ao fim');
    } else {
        const x = n - m;

        console.log(x);

        nentendi(x, m);
    }
}

nentendi(100, 5);

