const prompt = require('prompt-sync')();

// Inicialização do somatório
let somatorio = 0n; // BigInt para suportar números grandes

// Laço para ler 15 valores
for (let i = 1; i <= 15; i++) {
  let valor = parseInt(prompt(`Digite o ${i}º valor inteiro: `));

  // Cálculo da fatorial
  let fatorial = 1n;

  for (let j = 1; j <= valor; j++) {
    fatorial *= BigInt(j);
  }

  // Atualiza o somatório
  somatorio += fatorial;
}

// Saída
console.log(`\nSomatório da fatorial dos 15 valores lidos: ${somatorio}`);