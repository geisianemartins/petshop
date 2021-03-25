const nomePetshop = "PETSHOP AVANADE";

let Pets = [
    {
        nome: 'Costelinha',
        tipo: 'cachorro',
        idade: 5,
        raca: 'Vira-lata',
        peso: 3,
        tutor: 'Doug',
        contato: '(11) 98899-4545',
        vacinado: true,
        serviços: ['banho', 'tosa']

    },

    {
        nome: 'snoopy',
        tipo: 'cachorro',
        idade: 5,
        raca: 'beagle',
        peso: 5,
        tutor: 'Doug',
        contato: '(11) 98424-5765',
        vacinado: true,
        serviços: ['banho', 'tosa']
    },
    {
        nome: 'Amy',
        tipo: 'Gato',
        idade: 1,
        raca: 'vira-lata',
        peso: 2,
        tutor: 'geisiane',
        contato: '(81) 98467-7221',
        vacinado: true,
        serviços: 'banho'
    }
];
const listarPets = () => {
    for(let i = 0; i< Pets.length; i++){
        console.log(Pets[i].nome);
       
        console.log(`O nome do pet é ${Pets[i].nome}`)
    }
}
 listarPets();



