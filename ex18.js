const prompt = require('prompt-sync')();

// Entrada de dados
let cand1 = Number(prompt("Votos candidato 1: "));
let cand2 = Number(prompt("Votos candidato 2: "));
let cand3 = Number(prompt("Votos candidato 3: "));
let nulos = Number(prompt("Votos nulos: "));
let brancos = Number(prompt("Votos em branco: "));

// Processamento
let total = cand1 + cand2 + cand3 + nulos + brancos;

let percCand1 = (cand1 / total) * 100;
let percCand2 = (cand2 / total) * 100;
let percCand3 = (cand3 / total) * 100;
let percNulos = (nulos / total) * 100;
let percBrancos = (brancos / total) * 100;

// Saída
console.log(`\nTotal de eleitores: ${total}`);

console.log(`\nPercentual de votos válidos:`);
console.log(`Candidato 1: ${percCand1.toFixed(2)}%`);
console.log(`Candidato 2: ${percCand2.toFixed(2)}%`);
console.log(`Candidato 3: ${percCand3.toFixed(2)}%`);

console.log(`\nPercentual de votos nulos: ${percNulos.toFixed(2)}%`);
console.log(`Percentual de votos em branco: ${percBrancos.toFixed(2)}%`);