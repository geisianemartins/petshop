const  bancoDeDados = require('./bancoDeDados.json');

let pets = bancoDeDados.pets;
//console.log(JSON.stringify(bancoDeDados));

//console.log(JSON.parse(bancoDeDados));

const atenderCliente = (pet, servico) => {
    console.log(`Olá, ${pet.nome}`);
    (servico)?

    servico();
    console.log('Tchau, até mais!');
}

const darBanhoPet = () => {
    console.log('dando banho no pet...');

}

const apararUnhasPet = () =>{
    console.log('Aparando unhas...');
}


atenderCliente(pets[0], darBanhoPet);
console.log("-------------")
atenderCliente(pets[2],apararUnhasPet);
atenderCliente(pets[1], darBanhoPet);
