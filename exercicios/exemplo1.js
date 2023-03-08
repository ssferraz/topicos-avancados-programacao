// Funções podem ser utilizadas como argumentos ou resultados de outras funções.

function soma(a, b){
    return a + b;
}

console.log(soma(2,3));

const soma2 = function (a, b){
    return a + b;
}

console.log(soma2(3,4));

const soma3 = (a, b) => {
    return a + b;
};

console.log(soma3(3,4));

const soma4 = (a, b) =>  a + b;

console.log(soma4(3,4));


