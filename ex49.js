const prompt = require('prompt-sync')();

// Entrada de dados
let base = Number(prompt("Digite a base: "));
let expoente = parseInt(prompt("Digite o expoente: "));

// Inicialização
let potencia = 1;

// Processamento
for (let i = 1; i <= expoente; i++) {
  potencia *= base;
}

// Saída
console.log(`\n${base} elevado a ${expoente} = ${potencia}`);