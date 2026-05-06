const prompt = require('prompt-sync')();

// Entrada de dados
let dolar = Number(prompt("Digite o valor em dólar (US$): "));

// Cotação fixa (pode mudar se quiser)
let cotacao = 5.60;

// Processamento
let real = dolar * cotacao;

// Saída
console.log(`\nValor em real: R$ ${real}`);