// Exercício 48: Potências de 3 (expoente de 0 a 15)

let expoente = 0;

// Processamento e Saída
console.log("Potências de 3 de 0 até 15:\n");

while (expoente <= 15) {
  let potencia = 3 ** expoente;
  console.log(`3^${expoente} = ${potencia}`);
  expoente++;
}