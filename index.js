// TRABALHAR COM CAMINHOS
// Importar arquivos e informação
const Person = require('./documents/person.js'); //Metodo require()
//import Person from './documents/person.js'; // Usando Import


// Acessar dados importados de um arquivo externo
const person1 = new Person('Magi One', 31);
person1.lerData();

