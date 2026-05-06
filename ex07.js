const prompt = require('prompt-sync')();

// Entrada de dados
let n1 = Number(prompt("Digite o primeiro número: "));
let n2 = Number(prompt("Digite o segundo número: "));
let n3 = Number(prompt("Digite o terceiro número: "));
let n4 = Number(prompt("Digite o quarto número: "));

let numeros = [n1, n2, n3, n4];

console.log("\nAdições:");
for (let i = 0; i < numeros.length; i++) {
    for (let j = i + 1; j < numeros.length; j++) {
        console.log(`${numeros[i]} + ${numeros[j]} = ${numeros[i] + numeros[j]}`);
    }
}

console.log("\nMultiplicações:");
for (let i = 0; i < numeros.length; i++) {
    for (let j = i + 1; j < numeros.length; j++) {
        console.log(`${numeros[i]} x ${numeros[j]} = ${numeros[i] * numeros[j]}`);
    }
}