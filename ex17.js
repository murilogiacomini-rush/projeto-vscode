const prompt = require('prompt-sync')();

// Entrada de dados
let raio = Number(prompt("Digite o valor do raio: "));

// Processamento
let pi = 3.14159;
let area = pi * raio * raio;

// Saída
console.log(`\nÁrea da circunferência: ${area.toFixed(2)}`);