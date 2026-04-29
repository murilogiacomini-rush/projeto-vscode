const prompt = require('prompt-sync')();
console.log("---Conversor de Temperatura---");
let celsius = Number(prompt("insira a temperatura em graus celsius: "))
let fahrenheit = (celsius * 9/5) + 32;
console.log(`${fahrenheit}`)