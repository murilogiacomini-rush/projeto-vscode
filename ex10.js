const prompt = require('prompt-sync')();

// Entrada de dados
let num1 = Number(prompt("Digite o primeiro número: "));
let num2 = Number(prompt("Digite o segundo número: "));

// Processamento
let diferenca = num1 - num2;

// Saída
console.log(`\nDiferença: ${num1} - ${num2} = ${diferenca}`);