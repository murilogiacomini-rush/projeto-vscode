// Exercício 42: Quadrados na Faixa de Valores (15 a 200)

let resultado = "";

// Processamento (laço)
for (let numero = 15; numero <= 200; numero++) {
  let quadrado = numero * numero;
  resultado += `Número: ${numero} -> Quadrado: ${quadrado}\n`;
}

// Saída
console.log("Quadrados dos números de 15 a 200:\n");
console.log(resultado);