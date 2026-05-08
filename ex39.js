const prompt = require('prompt-sync')();

let numero = parseInt(prompt('Digite um número: '));

if (numero % 3 === 0 && numero % 5 === 0) {
  console.log(numero);
}