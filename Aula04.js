const prompt = require('prompt-sync')();
console.clear()



let numero = +prompt ('Digite um número')


let numero2 = +prompt ('Digite outro número')


let resposta = prompt('Você quer somar os números')
let total


if (resposta == 'sim'){

     total = numero + numero2
}
console.log (total);


console.log ();

console.clear()