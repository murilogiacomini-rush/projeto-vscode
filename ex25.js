const prompt = require('prompt-sync')();

// Entrada de dados
let numero = parseInt(prompt("Digite um número inteiro: "));

// Processamento
let sucessor = numero + 1;
let antecessor = numero - 1;

// Saída
console.log(`\nSucessor: ${sucessor}`);
console.log(`Antecessor: ${antecessor}`);