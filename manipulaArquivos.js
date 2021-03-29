let fs = require('fs'); //filesystem - modulo nativo

//pega conteudo do arquivo e converte pra utf-8
let bancoDeDados = fs.readFileSync('bancoDeDados.json', 'utf-8');


bancoDeDados = JSON.parse(bancoDeDados);

bancoDeDados.pets.push({
    "nome": "Joey",
    "tipo": "Gato",
    "idade": 1.5,
    "raca": "vira-lata",
    "peso": 3,
    "tutor": "Geysa",
    "contato": "(81) 98454-5765",
    "vacinado": true,
    "servicos": []
});

let petsAtualizado = JSON.stringify(bancoDeDados);

fs.writeFileSync('bancoDeDados.json', petsAtualizado, 'utf-8');