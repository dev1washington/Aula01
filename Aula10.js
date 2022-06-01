
   
const prompt = require('prompt-sync')();



let sim = 0;
let nao = 0;
let respostas = [];

let enunciado
 = +prompt('Responda sim ou nao (Pressione o enter para iniciar o questionário)');
console.log(enunciado);  
  
let pergunta1 = prompt('Você costuma andar de metrô').toLowerCase();




while (pergunta1 != 'sim' && pergunta1 != 'nao') {
    pergunta1 = prompt('Você costuma andar de metrô').toLowerCase();
}
let pergunta2 = prompt('Tens tatuagem no braço direito  ').toLowerCase();
while (pergunta2 != 'sim' && pergunta2 != 'nao') {
    pergunta2 = prompt('Tens tatuagem no braço direito  ').toLowerCase();
}
let pergunta3 = prompt('É novo na cidade  ').toLowerCase();
while (pergunta3 != 'sim' && pergunta3 != 'nao') {
    pergunta3 = prompt('É novo na cidade  ').toLowerCase();
}
let pergunta4 = prompt('Tens porte de arma ').toLowerCase();
while (pergunta4 != 'sim' && pergunta4 != 'nao') {
    pergunta4 = prompt('Tens porte de arma  ').toLowerCase();
}
let pergunta5 = prompt('Costuma caminhar pela manhãs?  ').toLowerCase();
while (pergunta5 != 'sim' && pergunta5 != 'nao') {
    pergunta5 = prompt('Costuma caminhar pela manhãs?  ').toLowerCase();
}
respostas = [pergunta1, pergunta2, pergunta3, pergunta4, pergunta5];
for (let i = 0; i < respostas.length; i++) {
    if (respostas[i] == 'sim') {
        sim++;
    } else if (respostas[i] == 'nao') {
        nao++;
    }
}
if (sim >= 4) {
    console.log('Vocé é CULPADO!');
} else if (sim == 3) {
    console.log('Você é SUSPEITO!');
} else if (sim >= 1) {
    console.log('Você é INOCENTE!');
}



console.log ();
