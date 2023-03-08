const alunos = [
    {
      "nome": "Alice",
      "nota1": 7.5,
      "nota2": 4.5,
    },
    {
      "nome": "Bob",
      "nota1": 8.5,
      "nota2": 5.5,
    },
    {
      "nome": "Charles",
      "nota1": 6.0,
      "nota2": 6.5
    },
    {
      "nome": "Debora",
      "nota1": 4.5,
      "nota2": 7.5
    },
    {
      "nome": "Edgar",
      "nota1": 7,
      "nota2": 10
    },
  ]

// Substituir nota1 e nota2 por media. Imprimir em tela
const alunosMedia = alunos.map(({nome, nota1, nota2}) => {
    aluno = {nome, media: (nota1 + nota2) / 2}
    return aluno
});
console.log(alunosMedia);

// Retornar a média dos alunos aprovados. Nota mínima: 7
const alunosAprovados = alunosMedia.filter((aluno) => { 
    return aluno.media >= 7
});
console.log(alunosAprovados);

// Retornar a média dos alunos reprovados.
const alunosReprovados = alunosMedia.filter((aluno) => { 
    return aluno.media < 7
});
console.log(alunosReprovados);

// Retornar a média de todos os alunos
const mediaGeral = alunosMedia.reduce((acumulador, mediaIndividual) => acumulador + (mediaIndividual.media / alunosMedia.length), 0);
console.log(mediaGeral);

// Retornar a média de todos os alunos aprovados
const mediaAprovados = alunos
    .map(({ nome, nota1, nota2 }) => ({ nome, media: (nota1 + nota2) / 2 }))
    .filter(({ media }) => media >= 7)
    .reduce((acumulador, {media}, _ , arrayFiltrado) => acumulador + media / arrayFiltrado.length, 0)
console.log(mediaAprovados);