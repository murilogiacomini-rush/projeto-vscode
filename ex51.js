// Exercício 51: Conversão de Graus Celsius para Fahrenheit (10°C até 100°C)

console.log("Conversão de Celsius para Fahrenheit:\n");

// Processamento e Saída
for (let celsius = 10; celsius <= 100; celsius += 10) {
  let fahrenheit = (celsius * 9 / 5) + 32;
  console.log(`${celsius}°C = ${fahrenheit.toFixed(1)}°F`);
}