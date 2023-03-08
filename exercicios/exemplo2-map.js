// Map: Transforma um objeto em outro objeto
// Array1.length === Array2.length

// NOTAS DOS ALUNOS
const notas = [6,8,9,7.5,6.5,5];

// TODOS ALUNOS GANHEM 1 PONTO EXTRA, ARMAZENADO EM UM OUTRO ARRAY
// PARADIDMA IMPERATIVO

const novasNotas = [];
for(let x = 0; x < notas.length; x++){
    novasNotas.push(notas[x] + 1);
}
console.log(novasNotas);

// PARADIGMA FUNCIONAL (map)
const soma1 = nota => nota + 1

const resultado = notas.map(soma1);

console.log(resultado);