/**
 * 
 * Todos os objetos que emitem eventos são instâncias da EventEmitterclasse. Esses objetos expõem uma eventEmitter.on()função que permite que uma ou mais funções sejam anexadas a eventos nomeados emitidos pelo objeto. Normalmente, os nomes dos eventos são strings camel-case, mas qualquer chave de propriedade JavaScript válida pode ser usada.
 */

// CARREGAR OS MODULOS
const EventEmitter = require('events');
const uuid = require('uuid'); // IDENTIFICADOR UNIVERSAL UNICO

// CRIAR UMA CLASSE ESTENDIDA
class MyEmitter extends EventEmitter {};

// CRIAR UM NOVO OBJECTO
const myEmitter = new MyEmitter();

// APLICAR O OVIDOR DE EVENTOS PARA CRIAR UMA EVENTO
myEmitter.on('event', () => console.log('Evento disparado'))

// EXECUTAR O EVENTO
myEmitter.emit('event')


// MANIPULAR EVENTOS DENTRO DE UMA CLASSE E EXPORTAR PARA SER EXECUTADA NA INDEX
class Logger extends EventEmitter {
    log(msg) {
        // chamar o evento
        this.emit('message', {id: uuid.v4(), msg});
    }
} module.exports = Logger;