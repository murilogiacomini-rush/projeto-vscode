
const prompt = require('prompt-sync')();

// 1. Entrada de Dados
// Usar Number() ou parseFloat() é excelente para garantir que o cálculo ocorra
let num1 = Number(prompt("Digite o primeiro número: "));
let num2 = Number(prompt("Digite o segundo número: "));
let num3 = Number(prompt("Digite o terceiro número: "));

// 2. Processamento
// O operador ** tem precedência sobre a soma, mas os parênteses ajudam na leitura
let somaQuadrados = (num1 ** 2) + (num2 ** 2) + (num3 ** 2);

// 3. Saída de Dados
console.log("Os números digitados foram: " + num1 + ", " + num2 + " e " + num3);

// No Node.js com prompt-sync, usamos console.log em vez de alert
console.log("A soma dos quadrados é: " + somaQuadrados);