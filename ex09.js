const prompt = require('prompt-sync')();

// Entrada de dados
let num = Number(prompt("Digite um número inteiro: "));

// Processamento
let quadrado = num * num;

// Saída
console.log(`\n${num} elevado ao quadrado é: ${quadrado}`);