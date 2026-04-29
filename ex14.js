// 1. Entrada de Dados
// Em um ambiente de navegador, usaríamos prompt(). 
// Aqui, vamos simular com variáveis para demonstrar a lógica:
let num1 = 2;
let num2 = 3;
let num3 = 4;

// 2. Processamento
// Calculamos primeiro a soma total
let soma = num1 + num2 + num3;

// Calculamos o quadrado da soma (soma elevada a 2)
let quadradoSoma = Math.pow(soma, 2); 
// Alternativamente: let quadradoSoma = soma * soma;

// 3. Saída de Dados
console.log("A soma é: " + soma);
console.log("O quadrado da soma é: " + quadradoSoma);