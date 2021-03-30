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
// const listarPets = () => {
//     bancoDeDados.forEach((pet) =>{
//         let {nome, tipo, idade, tutor, contato, servicos} = pet;

//         console.log(`Nome: ${nome}
//         Tipo: ${tipo}
//         idade: ${idade} 
//         Tutor: ${tutor}
//         Contato do tutor: ${contato}`)

//         pet.servicos.forEach((servico) => {
//             console.log(`Serviço : ${servico}`);
//         });
//     });
// }

//     for(let pet of bancoDeDados.pets) {
//         //console.log(pet[i].nome);
//         console.log(`${pet.nome}, ${pet.idade}, ${pet.tipo}, ${pet.raca},${pet.vacinado? 'vacinado' : 'não vacinado'}`);

//         for(const servico of pet.servicos){

//             console.log(`${servico.data} - ${servico.nome}`);
//          }
//     }
// }

    //listarPets();
    
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
        console.log("Campanha de vacina 2021");

        let numeroVacinados = 0;
        bancoDeDados.pets = bancoDeDados.pets.map((pet) => {
            if(!pet.vacinado){
                vacinarPet(pet);
                numerovacinados++;
            }
            return pet;
        });
        
        console.log(`${numeroVacinados} pets foram vacinados nessa campanha`);
    }

    //Adicinar Pet
    const adcionarPet = (...novosPets) => {
        novosPets.forEach((novoPet) =>{
        bancoDeDados.pets.push(novoPet);
    })
        
        atualizarbanco();
        novosPets.forEach((pet) => {
            console.log(`${pet.nome} foi adicionado com sucesso!`);
        })
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


        //console.log(pet);
        console.log(`Olá ${pet.nome}`);
        servico(pet);
        console.log('Até mais!!!');
        atualizarbanco();
    }
    
    const buscarPet = (nomePet) => {
        let petEncontrado = bancoDeDados.pets.find((pet) => {
            return pet.nome ==nomePet;
        });
       return petEncontrado ? petEncontrado : `Nenhum pet encontrado com nome ${nomePet}`;
    }

    const filtrarTipoPet = (pet) => {
            //&& E - AND
            //
        let petsEncontrados = bancoDeDados.pets.filter((pet)=>{
        return pet.tipo == tipoPet && !pet.vacinado;
        });

        return petsEncontrados;

    }

    const clientePremium = (pet) =>{
        let nServicos = pet.servicos.length;
        if(nServicos>5){
            console.log(`Ola ${pet.nome}! você ganhou um desconto!!!`);
        }
        else{
            console.log(`Olá ${pet.nome}, você ainda não tem descontos`);
        }
    }

    const contatoTutor = (pet) => {
        let {nome, tutor, contato} = pet;

        return `Tutor: ${tutor}
        Contato :${contato}
        Pet : ${nome}`;
    }

    const filtrarTutor = (nomeTutor) => {
        let petsTutor = bancoDeDados.pets.filter((pet) =>{
            return pet.tutor == nomeTutor;
        });

        console.log(`o nome do tutor é ${nomeTutor}:`)
        petsTutor.forEach((pet) => {
            console.log(`${pet.nome} - ${pet.tipo}`)
        })
    }
    //filtrarTutor('Joey');

    //console.log(buscarPet("Joey"));
    //atenderCliente(bancoDeDados.pets[1], darBanhoPet);
    //darBanhoPet(pets[0]);
    //darBanhoPet(pets[1]);
    //apararUnhasPet(pets[2]);
    // darBanhoPet(bancoDados.pets[0]);

    adcionarPet ({
        nome: 'Hulk',
        tipo: 'Cachorro',
        idade: 5,
        raca: 'Perdigueiro',
        peso: 15,
        tutor: 'Gilson',
        contato: '(81) 98667-7861',
        vacinado: false,
        servicos: [] 
    },

        {
            nome: 'bethoven',
            tipo: 'cachorro',
            idade: 2,
            raca: 'perdigueiro',
            peso: 15,
            tutor: 'idalice',
            contato: '(81) 98667-7861',
            vacinado: false,
            servicos: [] 
        }
    );


