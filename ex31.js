const prompt = require('prompt-sync')();

let a = parseFloat(prompt('Digite o valor de a: '));
let b = parseFloat(prompt('Digite o valor de b: '));
let c = parseFloat(prompt('Digite o valor de c: '));

let delta = (b * b) - (4 * a * c);

if (delta >= 0) {

  let x1 = (-b + Math.sqrt(delta)) / (2 * a);
  let x2 = (-b - Math.sqrt(delta)) / (2 * a);

  console.log(x1 = ${x1});
  console.log(x2 = ${x2});
  console.log('(raízes da equação)');

} else {

  console.log('Não existem raízes reais');

}