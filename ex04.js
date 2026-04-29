const prompt = require('prompt-sync')();

console.log("--- Quantidade gasta em uma viagem ---");
let distancia = Number(prompt("Digite a distancia percorrida em quilometros: "));
let quilometros = Number(prompt("Digite consumo do veiculo em quilometro por litro: "));
let formula = distancia / quilometros;
console.log(`${formula}`);