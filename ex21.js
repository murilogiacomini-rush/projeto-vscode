const prompt = require('prompt-sync')();

// Entrada de dados
let base = Number(prompt("Digite a base: "));
let expoente = Number(prompt("Digite o expoente: "));

// Processamento
let potencia = base ** expoente;

// Saída
console.log(`\nResultado: ${potencia}`);