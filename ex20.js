const prompt = require('prompt-sync')();

// Entrada de dados
let distancia = Number(prompt("Digite a distância (km): "));
let tempo = Number(prompt("Digite o tempo (horas): "));

// Processamento
let velocidade = distancia / tempo / 3.6;

// Saída
console.log(`\nVelocidade = ${velocidade.toFixed(2)} m/s`);