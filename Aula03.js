const prompt = require('prompt-sync')();
console.clear()


//Se o tempo for sol, Pablo vai sair

let tempo = prompt('Como está o tempo?')

if (tempo == 'sol') {
    console.log('O Pablo vai sair');

} else if (tempo  == 'Nublado'){
   console.log('O Pablo vai jogar video game.') 
}

else {
    console.log('O Pablo não vai sair');
}

//if seguido de if ele testa as duas condições 
//e ignora se  uma delas for falso e testa todas as opções.



//sempre testar a primeira condição
//primeiro if
//depois if e else
// depois if , else if e else

console.log();