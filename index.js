const nomePetshop = "PETSHOP AVANADE";

let pets = [
    {
        nome: 'Costelinha',
        tipo: 'cachorro',
        idade: 5,
        raca: 'Vira-lata',
        peso: 3,
        tutor: 'Doug',
        contato: '(11) 98899-4545',
        vacinado: true,
        servicos: ['banho', 'tosa']

    },

    {
        nome: 'Joey',
        tipo: 'Gato',
        idade: 1.5,
        raca: 'vira-lata',
        peso: 3,
        tutor: 'Geysa',
        contato: '(81) 98454-5765',
        vacinado: true,
        servicos: 'banho'
    },
    {
        nome: 'Amy',
        tipo: 'Gato',
        idade: 1,
        raca: 'vira-lata',
        peso: 2,
        tutor: 'geisiane',
        contato: '(81) 98467-7221',
        vacinado: false,
        servicos: 'banho'
    }
];
//ver data atual
    const verData = () => {

        let current_datetime = new Date()
        let formatted_date = current_datetime.getFullYear() + "/" + (current_datetime.getMonth() + 1) + "/" + current_datetime.getDate() + " " + current_datetime.getHours() + ":" + current_datetime.getMinutes() + ":" + current_datetime.getSeconds();
        console.log(`Data e Hora do Serviço: ${formatted_date}`)

    }
    const listarPets = () => {
        for(let pet of pets) {
            //console.log(pet[i].nome);
            console.log(`o nome do pet é ${pet.nome}`);
        }
    }
    listarPets();
       /*
    const vacinarPet = () =>{
        for(let pet of pets){
        if (pet.vacinado == false){
            pet.vacinado = true;
            console.log(`O pet ${pet.nome} foi vacinado`);
            
        }
        else console.log(`O pet já esta vacinado!`)
        }
            
    }
    vacinarPet();
*/
    let numerovacinados = 0;
    const campanhaVacina = () => {
        for(let pet of pets){
            if(pet.vacinado == false){
                pet.vacinado = true
                numerovacinados++;
            }
        }
    }
    //console.log(`Foram vacinados ${numerovacinados}`);

    let adcionarPet =
        [{
            nome: 'Juju',
            tipo: 'Gato',
            idade: 1,
            raca: 'vira-lata',
            peso: 2,
            tutor: 'lays',
            contato: '(81) 98667-7861',
            vacinado: false,
            servicos: [] 
        }];

    const novoPet = (adcionarPet) =>{
        pets.push(adcionarPet);
    }
    listarPets();

    
    const darBanhoPet = (pet) =>{
            pet.servicos.push('banho');
            console.log(` ${pet.nome} está tomado banho!`);
        }
    darBanhoPet(pets[3]);
   

    const tosarPet = (pet) =>{
        pet.servicos.push('tosar');
        console.log(` ${pet.nome} está com o cabelinho na régua!`);
        verData();
    }
    tosarPet(pets[3]);

    
    const apararUnhasPet = (pet) =>{
        pet.serviços.push('aparar unhas');
        console.log(`${pet.nome} está de unhas aparadas`);
        verData();
    }
    apararUnhasPet(pets[3]);

