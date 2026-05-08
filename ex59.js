const prompt = require('prompt-sync')();

// Entrada de dados
let dividendo = parseInt(prompt("Digite o dividendo: "));
let divisor = parseInt(prompt("Digite o divisor: "));

// Validação
if (divisor === 0) {
  console.log("\nErro: não é possível dividir por zero!");
} else {
  // Processamento
  let resultado = 0;

  while (dividendo >= divisor) {
    dividendo -= divisor;
    resultado++;
  }

  // Saída
  console.log(`\nResultado da divisão inteira: ${resultado}`);
}