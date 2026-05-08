const prompt = require('prompt-sync')();

// Entrada de dados
let base = Number(prompt("Digite a base: "));
let indice = Number(prompt("Digite o índice da raiz: "));

// Processamento
let raiz = base ** (1 / indice);

// Saída
console.log(`\nO valor da raiz é: ${raiz.toFixed(2)}`);