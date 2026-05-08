// Exercício 45: Somatório dos Valores Pares (1 até 500)

let somaPares = 0;

// Processamento
for (let numero = 2; numero <= 500; numero += 2) {
  somaPares += numero;
}

// Saída
console.log(`O somatório dos valores pares de 1 até 500 é: ${somaPares}`);