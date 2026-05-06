const prompt = require('prompt-sync')();

// Entrada de dados
let num1 = Number(prompt("Digite o primeiro número: "));
let num2 = Number(prompt("Digite o segundo número: "));
let num3 = Number(prompt("Digite o terceiro número: "));
let num4 = Number(prompt("Digite o quarto número: "));

// Processamento
let produto = num1 * num3;
let soma = num2 + num4;

// Saída
console.log(`\nProduto: ${produto}`);
console.log(`Soma: ${soma}`);