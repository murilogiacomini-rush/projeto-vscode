const prompt = require('prompt-sync')();

let nota1 = parseFloat(prompt('Digite a primeira nota: '));
let nota2 = parseFloat(prompt('Digite a segunda nota: '));
let nota3 = parseFloat(prompt('Digite a terceira nota: '));
let nota4 = parseFloat(prompt('Digite a quarta nota: '));

let media = (nota1 + nota2 + nota3 + nota4) / 4;

if (media > 7) {
  console.log(Média: ${media} - Aprovado);

} else if (media >= 5) {
  console.log(Média: ${media} - Exame);

  let exame = parseFloat(prompt('Digite a nota do exame: '));

  let novaMedia = (media + exame) / 2;

  if (novaMedia > 5) {
    console.log(Nova Média: ${novaMedia} - Aprovado em Exame);
  } else {
    console.log(Nova Média: ${novaMedia} - Reprovado);
  }

} else {
  console.log(Média: ${media} - Reprovado);
}