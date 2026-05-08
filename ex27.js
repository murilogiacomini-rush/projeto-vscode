const prompt = require('prompt-sync')();

// Entrada de dados
let num1 = parseInt(prompt("Digite o primeiro número inteiro: "));
let num2 = parseInt(prompt("Digite o segundo número inteiro: "));

// Processamento
let diferenca;

if (num1 > num2) {
  diferenca = num1 - num2;
} else {
  diferenca = num2 - num1;
}

// Saída
console.log(`\nA diferença entre o maior e o menor valor é: ${diferenca}`);