const prompt = require('prompt-sync')();

// Entrada de dados
let comprimento = Number(prompt("Digite o comprimento: "));
let largura = Number(prompt("Digite a largura: "));
let altura = Number(prompt("Digite a altura: "));

// Processamento
let volume = comprimento * largura * altura;

// Saída
console.log(`\nVolume da caixa: ${volume}`);