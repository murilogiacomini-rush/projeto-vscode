const prompt = require('prompt-sync')();

let numero = parseInt(prompt('Digite um número inteiro: '));

let resultado = numero * 2;

if (resultado > 30) {
  console.log(resultado);
}