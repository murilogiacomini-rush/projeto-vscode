const prompt = require('prompt-sync')();

// Entrada de dados
let numero = Number(prompt("Digite um número para ver a tabuada: "));

// Inicialização
let multiplicador = 1;

// Processamento e Saída
console.log(`\nTabuada do ${numero}:\n`);

while (multiplicador <= 10) {
  let produto = numero * multiplicador;
  console.log(`${numero} x ${multiplicador} = ${produto}`);
  multiplicador++;
}
