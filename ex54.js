const prompt = require('prompt-sync')();

// Inicialização
let somatorio = 0;
let contador = 0;

// Leitura dos 10 valores
while (contador < 10) {
  let valor = Number(prompt(`Digite o ${contador + 1}º valor real: `));
  somatorio += valor;
  contador++;
}

// Cálculo da média
let media = somatorio / 10;

// Saída
console.log(`\nSomatório dos valores: ${somatorio.toFixed(2)}`);
console.log(`Média dos valores: ${media.toFixed(2)}`);