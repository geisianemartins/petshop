const moment = require('moment');
const fs = require('fs');
let bancoDeDados = fs.readFileSync ('./bancoDeDados.json');

bancoDeDados = JSON.parse(bancoDeDados);

const atualizarbanco= () => {
    //conversão do objeto javascipt para JSON
    let petsAtualizado = JSON.stringify(bancoDeDados);
    //atualização do arquivo bancoDeDados.json
    fs.writeFileSync('bancoDeDados.json', petsAtualizado, 'utf-8');
}
const listarPets = () => {
    for(let pet of bancoDeDados.pets) {
        //console.log(pet[i].nome);
        console.log(`${pet.nome}, ${pet.idade}, ${pet.tipo}, ${pet.raca},${pet.vacinado? 'vacinado' : 'não vacinado'}`);

        for(const servico of pet.servicos){

            console.log(`${servico.data} - ${servico.nome}`);
         }
    }
}

    listarPets();
    
    const vacinarPet = () => {
        if (!pet.vacinado){
            pet.vacinado = true;
            console.log(`O pet ${pet.nome} foi vacinado com sucesso!`);
        }
        else {
            console.log(`Ops. ${pet.nome}O pet já esta vacinado!`);
        }
    }
        
    //vacinarPet();
    const campanhaVacina = () =>{
        console.log("Campanha de vacina");

        let numerovacinados = 0;
    for(let pet of bancoDeDados.pets){
        if(!pet.vacinado){
            vacinarPet(pet);
            numerovacinados++;
            }
        }
        console.log(`${numerovacinados} pets foram vacinados nessa campanha`);
    }

    const adcionarPet = novoPet => {
        bancoDeDados.pets.push(novoPet);
        atualizarbanco();
        console.log(`${novoPet.nome} foi adicionado com sucesso!`);
    }
    
    const darBanhoPet = pet => {
        pet.servicos.push({
            'nome':'banho',
            'data': moment().format('DD-MM-YYYY')
        });
        console.log(`${pet.nome} está de banho tomado!`);
    };
    const tosarPet = pet => {
        pet.servicos.push({
            'nome':'tosa',
            'data': moment().format('DD-MM-YYYY')
        });
        console.log(`${pet.nome} está com cabelinho na régua :)`);
    };
    const apararUnhasPet = pet => {
        pet.servicos.push({
            'nome':'corte de unhas',
            'data': moment().format('DD-MM-YYYY')
        });
        console.log(`${pet.nome} está de unhas aparadas!`);
    };

    const atenderCliente = (pet, servico)=>{
        console.log(`Olá ${pet.nome}`);
        servico(pet);
        console.log('Até mais!!!');
    }
    atenderCliente(bancoDeDados.pets[1], darBanhoPet)
    //darBanhoPet(pets[0]);
    //darBanhoPet(pets[1]);
    //apararUnhasPet(pets[2]);
    // darBanhoPet(bancoDados.pets[0]);

    adcionarPet ({
        nome: 'Juju',
        tipo: 'Gato',
        idade: 1,
        raca: 'vira-lata',
        peso: 2,
        tutor: 'lays',
        contato: '(81) 98667-7861',
        vacinado: false,
        servicos: [] 
    });
