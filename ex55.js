const prompt = require('prompt-sync')();

// Inicialização
let somatorio = 0;
let totalValores = 0;
let media = 0;

while (true) {
  let valor = Number(prompt("Digite um valor positivo (ou 0/negativo para parar): "));

  if (valor <= 0) {
    break;
  }

  somatorio += valor;
  totalValores++;
  media = somatorio / totalValores;
}

// Saída
console.log(`\nSomatório: ${somatorio.toFixed(2)}`);
console.log(`Média: ${media.toFixed(2)}`);
console.log(`Total de valores lidos: ${totalValores}`);