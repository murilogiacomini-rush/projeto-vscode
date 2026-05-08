// Exercício 56: Fatorial dos Valores Ímpares entre 1 e 100

let resultado = 1n; // BigInt para suportar valores enormes

// Processamento
for (let impar = 1; impar <= 100; impar += 2) {
  for (let valor = 1; valor <= impar; valor++) {
    resultado *= BigInt(valor);
  }
}

// Saída
console.log(`Resultado da fatorial dos valores ímpares entre 1 e 100: ${resultado}`);