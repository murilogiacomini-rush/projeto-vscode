const prompt = require('prompt-sync')();

// Entrada de dados
let num1 = parseInt(prompt("Digite o primeiro número inteiro: "));
let num2 = parseInt(prompt("Digite o segundo número inteiro: "));

// Processamento
let divisao = num1 / num2;
let quadrado = divisao * divisao;

// Saída
console.log(`\nO quadrado da divisão é: ${quadrado.toFixed(0)}`);