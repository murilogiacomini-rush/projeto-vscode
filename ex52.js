// Exercício 52: Somatório de Grãos de Trigo no Tabuleiro de Xadrez

let totalGraos = 0n; // BigInt para suportar números muito grandes
let quadro = 1;

// Processamento
while (quadro <= 64) {
  let graosNoQuadro = 2n ** BigInt(quadro - 1);
  totalGraos += graosNoQuadro;
  quadro++;
}

// Saída
console.log(`Total de grãos de trigo no tabuleiro de xadrez = ${totalGraos}`);