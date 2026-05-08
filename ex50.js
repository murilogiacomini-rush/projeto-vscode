// Exercício 50: Sequência de Fibonacci até o 15º termo

let termo1 = 0;
let termo2 = 1;

console.log("Sequência de Fibonacci até o 15º termo:\n");

// Exibindo os dois primeiros termos
console.log(termo1);
console.log(termo2);

let i = 3;

// Processamento
while (i <= 15) {
  let proximoTermo = termo1 + termo2;
  console.log(proximoTermo);

  termo1 = termo2;
  termo2 = proximoTermo;

  i++;
}