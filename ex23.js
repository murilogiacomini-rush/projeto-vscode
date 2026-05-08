const prompt = require('prompt-sync')();

// Entrada de dados
let pes = Number(prompt("Digite a medida em pés: "));

// Processamento
let metros = pes * 0.3048;

// Saída
console.log(`\nMedida equivalente em metros: ${metros.toFixed(3)}`);