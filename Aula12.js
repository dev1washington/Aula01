
const prompt = require("prompt-sync")();

const nome = prompt('Digite o seu nome: ');
console.log();
console.log(`Olá ${nome}, você retorna de  etapa de  formação para a guerra,  e se for bem avaliado será um novo cavaleiro medieval!`);
console.log("Responda apenas com S/N");
console.log()

let perguntas = ['Você já forjou a sua espada? [S/N]', 'Levou o escudeiro para a batalha? [S/N]', 
'Está portando facas para a luta? [S/N]', 'Selou o seu cavalo? [S/N]', 'Socorreu seus amigos em batalha? [S/N]']

let sim = 0;
let resposta = 's' || 'n';
    for(let index = 0; index <= 4; index++){ 
        console.log();
        resposta = prompt(perguntas[index]);
        if(resposta == 's'){
            sim++
        }else if(resposta =='n'){
            sim = sim  
        }
        while(resposta != 's' && resposta != 'n'){   
            console.log();
            console.log('Resposta inválida!');
            resposta = prompt(perguntas[index]);
            if(resposta == 's'){
                sim++
            }else{
                sim = sim
            }
        }
}
console.log()
if(sim == 5){
    console.log(`Parabéns ${nome}, você é um herói e seu momento de mudar de vida chegará em breve!`)
}
else if(sim == 4){
    console.log(`Legal ${nome}, você já é quase um heroi!`)
}
else if(sim == 3){
    console.log(`${nome}, você está no caminho certo, mas precisa de um pouco mais de empenho para ter melhores resultados!`)
}
else if(sim <= 2 && sim != 0){
    console.log(`${nome}... Assim fica difícil alcançar os resultados né! Se esforça um pouco mais!`)
}
else{
    console.log(`${nome}... ${nome}... Se não começar a fazer alguma coisa por você agora mesmo, nunca sairá do lugar!`)
}   


// Vizualizar alterações

console.log ();