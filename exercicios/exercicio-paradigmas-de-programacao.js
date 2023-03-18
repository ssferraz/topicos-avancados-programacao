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

// Um array com nome investimento_positivo com mês e saldo cujo saldo seja positivo
const investimento_positivo = investimento.filter((inv) => {
    return inv.saldo >= 0;
});
console.log(investimento_positivo);

// Um array com nome investimento_negativo com mês e saldo cujo saldo seja negativo
const investimento_negativo = investimento.filter((inv) => {
    return inv.saldo < 0;
});
console.log(investimento_negativo);

// Uma variável com o total negativo
const total_negativo = investimento_negativo.reduce((acc, media) => acc + media.saldo, 0);
console.log(total_negativo);

// Uma variável com o total positivo
const total_positivo = investimento_positivo.reduce((acc, media) => acc + media.saldo, 0);
console.log(total_positivo);

// Uma variável com o total final (negativo + positivo)
const total_final = total_negativo + total_positivo;
console.log(total_final.toFixed(1));

