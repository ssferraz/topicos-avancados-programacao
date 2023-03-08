// Operações financeiras
// Lucros estão em dólares
const operacoes = [
    {
        "mes": 1,
        "lucro": 100
    },
    {
        "mes": 2,
        "lucro": -50
    },
    {
        "mes": 3,
        "lucro": 450
    },
    {
        "mes": 4,
        "lucro": -50
    }
];


// O usuário quer que você apresente o total de lucro dos investimentos que foram positivos em reais

// Map -> Converter os valores de USD para R$ (1 USD -> R$ 5,15)
const conversaoEmReal = (obj) => {
    obj["lucro"] = obj["lucro"] * 5.15
    return obj
};

// Filter -> Filtrar os valores positivos
const isPositivo = (obj) => obj["lucro"] >= 0

// Reduce -> Reduzir o array filtrado em um número == total do lucro
const totalLucro = (acumulador, obj) => acumulador + obj["lucro"];

// Composição
const operacaoEmReal = operacoes.map(conversaoEmReal).filter(isPositivo).reduce(totalLucro, 0);

console.log(operacaoEmReal);


