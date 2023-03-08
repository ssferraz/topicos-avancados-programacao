const notas = [6, 8, 9, 7, 6, 5, 10, 3, 1];

// Dado o array notas, construir um novo array (pares) que contenha apenas os valores pares

// Paradigma imperativo
const numerosPares = [];
for (let i = 0; i < notas.length; i++){
    if(notas[i] % 2 === 0){
        numerosPares.push(notas[i]);
    }
}

console.log(numerosPares);

// Paradigma funcinal

const isPar = nota => nota % 2 === 0;

const resultado = notas.filter(isPar);

console.log(resultado);