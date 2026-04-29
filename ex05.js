const prompt = require('prompt-sync')();

console.log("--- valor em uma Prestacao em atraso --- ")
let Prestacao = Number(prompt("Digite o valor da Prestacao: "));
let atraso = Number(prompt("Digite o numero de meses em atraso: "));
let taxa_juros = Number(prompt("Digite a taxa_juros: "));
let formula = Prestacao * (1 + (atraso / 100) * taxa_juros);
console.log (`${formula}`);
