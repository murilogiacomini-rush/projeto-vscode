const prompt = require('prompt-sync')();

// Entrada de dados
let salario = Number(prompt("Digite o salário mensal: "));
let porcentagem = Number(prompt("Digite a porcentagem de aumento (%): "));

// Processamento
let aumento = salario * (porcentagem / 100);
let novoSalario = salario + aumento;

// Saída
console.log(`\nAumento concedido: R$ ${aumento.toFixed(2)}`);
console.log(`Novo salário: R$ ${novoSalario.toFixed(2)}`);