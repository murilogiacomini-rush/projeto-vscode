const prompt = require('prompt-sync')();

let valor1 = parseFloat(prompt('Digite o primeiro valor: '));
let valor2 = parseFloat(prompt('Digite o segundo valor: '));
let valor3 = parseFloat(prompt('Digite o terceiro valor: '));

let soma = valor1 + valor2 + valor3;

if (soma > 100) {
  console.log(soma);
}