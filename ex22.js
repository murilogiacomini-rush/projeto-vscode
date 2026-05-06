const prompt = require('prompt-sync')();

// Entrada de dados
let raio = Number(prompt("Digite o raio da esfera: "));

// Processamento
let pi = Math.PI;
let volume = (4 / 3) * pi * (raio ** 3);

// Saída
console.log(`\nVolume da esfera: ${volume.toFixed(2)}`);