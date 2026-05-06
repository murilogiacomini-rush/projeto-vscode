const prompt = require('prompt-sync')();

// Entrada de dados
let real = Number(prompt("Digite o valor em real (R$): "));

// Cotação fixa
let cotacao = 5.60;

// Processamento
let dolar = real / cotacao;

// Saída
console.log(`\nValor em dólar: US$ ${dolar.toFixed(2)}`);