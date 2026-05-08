// Exercício 60: Quadrados dos valores inteiros de 15 a 200 contando de 3 em 3

let numero = 15;

console.log("Quadrados dos números de 15 a 200 (de 3 em 3):\n");

// Processamento e Saída
while (numero <= 200) {
  let quadrado = numero * numero;
  console.log(`Número: ${numero} -> Quadrado: ${quadrado}`);
  numero += 3;
}