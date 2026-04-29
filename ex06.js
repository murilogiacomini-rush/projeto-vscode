const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Entrada de dados
rl.question('Digite o valor de A: ', (valorA) => {
    rl.question('Digite o valor de B: ', (valorB) => {

        let A = valorA;
        let B = valorB;

        console.log("\n--- Resultado ---");
        console.log(`Antes da troca: A = ${A}, B = ${B}`);

        // Troca de valores
        let temp = A;
        A = B;
        B = temp;

        console.log(`Após a troca: A = ${A}, B = ${B}`);

        // Fecha o programa
        rl.close();
    });
});