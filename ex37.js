const prompt = require('prompt-sync')();

let valor = parseInt(prompt('Digite um valor inteiro: '));

if (valor >= 1 && valor <= 9) {
  console.log('Valor está na faixa permitida');
} else {
  console.log('Valor não está na faixa permitida');
}