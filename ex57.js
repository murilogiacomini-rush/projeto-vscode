const prompt = require('prompt-sync')();

// Inicialização
let areaTotal = 0;

while (true) {
  // Entrada de dados
  let nomeComodo = prompt("Digite o nome do cômodo: ");
  let largura = Number(prompt(`Digite a largura do(a) ${nomeComodo} (em metros): `));
  let comprimento = Number(prompt(`Digite o comprimento do(a) ${nomeComodo} (em metros): `));

  // Processamento
  let areaComodo = largura * comprimento;
  areaTotal += areaComodo;

  // Saída parcial
  console.log(`\nÁrea do(a) ${nomeComodo}: ${areaComodo.toFixed(2)} m²`);
  console.log(`Área acumulada até agora: ${areaTotal.toFixed(2)} m²\n`);

  // Pergunta se deseja continuar
  let continuar = prompt("Deseja adicionar outro cômodo? (S/N): ").toUpperCase();

  if (continuar === "N" || continuar === "NAO" || continuar === "NÃO") {
    break;
  }
}

// Saída final
console.log(`\nÁrea total da residência: ${areaTotal.toFixed(2)} m²`);