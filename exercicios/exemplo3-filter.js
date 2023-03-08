// Filter: Filtra os objetos de um array
// Array1.length >= Array2.length

// NOTAS DE ALUNOS
const notas = [6,8,9,7.5,6.5,5];

// DADO O ARRAY NOTAS, RETORNAR AS NOTAS DOS ALUNOS APROVADOS EM UM NOTO ARRAY
// NOTA >= 7

// PARADIGMA IMPERATIVO
const aprovadosNota = [];

for(let x = 0; x < notas.length; x++){
    if(notas[x]>=7){
        aprovadosNota.push(notas[x]);
    };
}
console.log(aprovadosNota);

// PARADIGMA FUNCIONAL (FILTER)

const isAprovado = nota => nota >= 7;

// FILTER -> FILTRA POR UM CONTEÚDO DENTRO DE UM ARRAY

const resultado = notas.filter(isAprovado);

console.log(resultado);