// Reduce: Reduz um array de objetos em um único objeto
// Array1.length === 1

const notas1semestre = [ 7, 8, 2.5, 10]

// Qual a nota total desse aluno?

// Paradigma imperativo
let acumulador = 0;
for (let x = 0; x < notas1semestre.length; x++) {
    acumulador = acumulador + notas1semestre[x];
}
console.log(acumulador);

// Paradigma funcional (reduce)
const total = (acumulador, nota) => acumulador + nota;
const soma = notas1semestre.reduce(total, 0);

console.log(soma);