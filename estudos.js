// const  bancoDeDados = require('./bancoDeDados.json');

// let pets = bancoDeDados.pets;
// //console.log(JSON.stringify(bancoDeDados));

// //console.log(JSON.parse(bancoDeDados));

// const atenderCliente = (pet, servico) => {
//     console.log(`Olá, ${pet.nome}`);
//     (servico)?

//     servico();
//     console.log('Tchau, até mais!');
// }

// const darBanhoPet = () => {
//     console.log('dando banho no pet...');

// }

// const apararUnhasPet = () =>{
//     console.log('Aparando unhas...');
// }


// atenderCliente(pets[0], darBanhoPet);
// console.log("-------------")
// atenderCliente(pets[2],apararUnhasPet);
// atenderCliente(pets[1], darBanhoPet);

//Desentruturação

// let pessoa = {
//     nome : 'Geisiane',
//     idade : 21,
//     profissao : 'estagiária',
//     contato : 81984677221,
//     habilidade :'nenhuma'   
// }
// let {nome, contato} = pessoa;

// console.log(`${nome} - ${contato}`);


//Spread operator
let turma1 = ['Anna', 'João', 'Vinicius', 'Igor'];
let turma2 = ['Geisiane', 'Luiz', 'Moara', 'Renata'];

// let turmasAvanade = [turma1, turma2];
// let turmasAvanade = [...turma1, ...turma2];

// console.log(turmasAvanade);

turma1.push(turma2);
console.log(turma1)


//Parâmetro Rest- parametro opcional

function somar(...numeros){
    //reduce para obter a soma
    return numeros.reduce((acum,num) => acum +=num);
}

somae (1,4);

}
