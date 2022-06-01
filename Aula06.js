const prompt = require('prompt-sync')();
console.clear()


let num1 = +prompt('Digite um número: ');
let num2 = +prompt('Digite outro número: ');

if (num1 === num2){
    console.log('Os números são iguais. A condição é verdadeira.');
}

console.log ();