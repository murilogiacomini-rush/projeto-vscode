const prompt = require('prompt-sync')();

// Entrada de dados
let valor1 = Number(prompt("Digite o primeiro valor: "));
let valor2 = Number(prompt("Digite o segundo valor: "));

// Processamento
let adicao = valor1 + valor2;
let subtracao = valor1 - valor2;
let multiplicacao = valor1 * valor2;
let divisao = valor1 / valor2;

// Saída
console.log(`\nAdição: ${valor1} + ${valor2} = ${adicao}`);
console.log(`Subtração: ${valor1} - ${valor2} = ${subtracao}`);
console.log(`Multiplicação: ${valor1} * ${valor2} = ${multiplicacao}`);
console.log(`Divisão: ${valor1} / ${valor2} = ${divisao}`);