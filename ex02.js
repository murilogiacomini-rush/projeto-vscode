const prompt = require('prompt-sync')();


let fa = Number(prompt("digite a temperatura em fhrenheit :"));
let c = (fa -32) * 5/9;
console.log(`${c}`)