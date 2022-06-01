const prompt = require('prompt-sync')();
console.clear()


let num1 = +prompt('Digite um número: ');
let num2 = +prompt('Digite outro número: ');



/*
if (num1 === num2){
    console.log('Os números são iguais. A condição é verdadeira. ');
}
*/

if (num1 > num2){
    console.log(num1);
}   else if (num2 > num1){
    console.log(num2);
}   else {
    console.log('Eles são iguais')
}



console.log ();