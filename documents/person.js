const person = {
    name: 'Ageu Miguel',
    idade: 31
}

class Person {
    constructor(name, idade) {
        this.name = name;
        this.idade = idade;
    }

    lerData() {
        console.log(`O meu nome é ${this.name} e tenho ${this.idade} de idade`);
    }
}

// Modulo para eexpostação de informação
module.exports = Person; 