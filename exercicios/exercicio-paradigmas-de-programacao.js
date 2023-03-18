const investimento =
    [
        { mes: 1, saldo: 100 },
        { mes: 2, saldo: 32.4 },
        { mes: 3, saldo: -55.9 },
        { mes: 4, saldo: -12.1 },
        { mes: 5, saldo: 27.4 },
        { mes: 6, saldo: -48.5 },
        { mes: 7, saldo: -25.3 },
        { mes: 8, saldo: 12.4 },
        { mes: 9, saldo: 3.7 },
    ];

// Paradigma Imperativo
console.log("--- PARADIGMA IMPERATIVO ---");

// Um array com nome investimento_positivo com mês e saldo cujo saldo seja positivo
let investimento_positivo_imp = [];
for(let i = 0; i < investimento.length; i++){
    if(investimento[i].saldo>=0){
        investimento_positivo_imp.push(investimento[i]);
    }
};
console.log("1.");
console.log(investimento_positivo_imp);

// Um array com nome investimento_negativo com mês e saldo cujo saldo seja negativo
let investimento_negativo_imp = [];
for(let i = 0; i < investimento.length; i++){
    if(investimento[i].saldo < 0){
        investimento_negativo_imp.push(investimento[i]);
    }
};
console.log("2.");
console.log(investimento_negativo_imp);

// Um array com nome positivo apenas com o saldo positivo
let positivo_imp = [];
for(let i = 0; i < investimento.length; i++){
    const inv_aux = {saldo: 0};
    if(investimento[i].saldo >= 0){
        inv_aux.saldo = investimento[i].saldo;
        positivo_imp.push(inv_aux);
    }
};
console.log("3.");
console.log(positivo_imp);

// Um array com nome negativo apenas com o saldo negativo
let negativo_imp = [];
for(let i = 0; i < investimento.length; i++){
    const inv_aux = {saldo: 0};
    if(investimento[i].saldo < 0){
        inv_aux.saldo = investimento[i].saldo;
        negativo_imp.push(inv_aux);
    }
};
console.log("4.");
console.log(negativo_imp);

// Uma variável com o total negativo
let total_negativo_imp = 0;
for(let i = 0; i < investimento.length; i++){
    if(investimento[i].saldo < 0){
        total_negativo_imp += investimento[i].saldo;
    }
};
console.log(`5. Total Negativo: ${total_negativo_imp}`);

// Uma variável com o total positivo
let total_positivo_imp = 0;
for(let i = 0; i < investimento.length; i++){
    if(investimento[i].saldo >= 0){
        total_positivo_imp += investimento[i].saldo;
    }
};
console.log(`6. Total Positivo: ${total_positivo_imp}`);

// Uma variável com o total final (negativo + positivo)
console.log(`7. Total Final: ${(total_positivo_imp + total_negativo_imp).toFixed(1)}`);

console.log("----------------------------");

// Paradigma Funcional 
console.log("--- PARADIGMA FUNCIONAL ---");

// Um array com nome investimento_positivo com mês e saldo cujo saldo seja positivo
const investimento_positivo = investimento.filter((inv) => {
    return inv.saldo >= 0;
});
console.log("1.");
console.log(investimento_positivo);

// Um array com nome investimento_negativo com mês e saldo cujo saldo seja negativo
const investimento_negativo = investimento.filter((inv) => {
    return inv.saldo < 0;
});
console.log("2.");
console.log(investimento_negativo);

// Um array com nome positivo apenas com o saldo positivo
const saldo_positivo = investimento_positivo.map(obj => ({ saldo: obj.saldo }));
console.log("3.");
console.log(saldo_positivo);

// Um array com nome negativo apenas com o saldo negativo
const saldo_negativo = investimento_negativo.map(obj => ({ saldo: obj.saldo }));
console.log("4.");
console.log(saldo_negativo);

// Uma variável com o total negativo
const total_negativo = investimento_negativo.reduce((acc, media) => acc + media.saldo, 0);
console.log(`5. Total Positvo: ${total_negativo}`);

// Uma variável com o total positivo
const total_positivo = investimento_positivo.reduce((acc, media) => acc + media.saldo, 0);
console.log(`6. Total Positvo: ${total_positivo}`);

// Uma variável com o total final (negativo + positivo)
const total_final = total_negativo + total_positivo;
console.log(`7. Total Final: ${total_final.toFixed(1)}`);

console.log("----------------------------");
