// Exercício 44: Soma dos Cem Primeiros Números Naturais

let soma = 0;
let contador = 1;

// Processamento
while (contador <= 100) {
  soma += contador;
  contador++;
}

// Saída
console.log(`A soma dos 100 primeiros números naturais é: ${soma}`);