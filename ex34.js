const prompt = require('prompt-sync')();

let num1 = parseInt(prompt('Digite o primeiro número: '));
let num2 = parseInt(prompt('Digite o segundo número: '));
let num3 = parseInt(prompt('Digite o terceiro número: '));
let num4 = parseInt(prompt('Digite o quarto número: '));

console.log('Valores divisíveis por 2 ou 3:');

if (num1 % 2 === 0 || num1 % 3 === 0) {
  console.log(num1);
}

if (num2 % 2 === 0 || num2 % 3 === 0) {
  console.log(num2);
}

if (num3 % 2 === 0 || num3 % 3 === 0) {
  console.log(num3);
}

if (num4 % 2 === 0 || num4 % 3 === 0) {
  console.log(num4);
}