const prompt = require('prompt-sync')();

// Inicialização
let maior = -1;
let menor = -1;

while (true) {
  // Entrada de dados
  let valor = parseInt(prompt("Digite um valor inteiro positivo (negativo para parar): "));

  // Condição de parada
  if (valor < 0) {
    break;
  }

  // Processamento
  if (valor > maior) {
    maior = valor;
  }

  if (menor === -1 || valor < menor) {
    menor = valor;
  }
}

// Saída
console.log(`\nMaior valor informado: ${maior}`);
console.log(`Menor valor informado: ${menor}`);