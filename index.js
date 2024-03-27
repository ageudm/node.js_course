// TRABALHAR COM CAMINHOS
// Importar arquivos e informação
const Person = require('./documents/person.js'); //Metodo require()
//import Person from './documents/person.js'; // Usando Import
const Logger = require('./documents/event_demo.js')


// Acessar dados importados de um arquivo externo
const person1 = new Person('Magi One', 31);
person1.lerData();


// EXECUTAR O EVENTO CRIADO NA CLASSE LOGGER
    const logger = new Logger();
    logger.on('message', (data) => console.log('Imprimir a lista', data));
    logger.log('Angola Linda')
    logger.log('Angola nova')

