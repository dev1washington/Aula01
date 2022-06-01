
//Arrays
console.clear()
const prompt = require('prompt-sync')();





// posso quebrar linhas na lista que isso não altera o resultado
// valores podem ser strings, numeros e boleanos
let alunos = ["yris" , "Victor", "Elton"];
let idades = [23 , 25, 33];
let c17 = [23 , 25, "yris","Victor", "Fernando", "Mauricio"];


let contador=0
let arrayGeral = [];
let arrayPar = [];
let arrayImpar = [];
let limite = 10



while (contador<limite){
//console.log ('Repetiu', contador);
let numero = +prompt('Digite um número');
arrayGeral.push(numero);
contador++

if (numero % 2 == 0){

    arrayPar.push(numero);{        
    }
    else
    arrayImpar.push(numero)

}

//resolver esse if

}


//vou ler vinte numeros inteiros


///let novofilme = prompt('Qual filme deseja adicionar?');
//let count = 0
//console.log (novofilme);
/*console.log (c17.length - 1) ;  */ //Indicar a penúltima posição
/*c17[2] = "Carlos"  */    // Coloquei Carlos no lugar da Yris
//console.log(c17);

//let i= 0;
//while (1<3);

//c17[6][1] = "Claudio";
//VOU PEGAR VINTE NUMERO 
//DOS MEUS USUARIOS E VOU GUARDÁ -LOS NUM ARRAY
// SE FOR PAR EU VOU GUARDAR NA PRINCIPAL E NA PAR 
// SE FOR IMPAR EU VOU GUARDAR NA PRINCIPAL E NA IMPAR

//console.log (c17[6] [1]);

//console.log (c17[6][1]  /*, c17[2][3]*/  );

console.log ();
