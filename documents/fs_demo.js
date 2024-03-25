// fs módulo (sistema de arquivos / file system) 
// em Node.js fornece um poderoso conjunto de funcionalidades para interagir com o sistema de arquivos em seu computador. Ele permite realizar várias operações em arquivos e diretórios, tornando-o um elemento fundamental para muitos aplicativos Node.js.

// CARREGAR OS MODULOS
const fs = require('fs');
const path = require('path');

/*
// CRIAR DEITORIO
 fs.mkdir(
        path.join(__dirname, '/text'), {}, 
        (err) => {
            if (err) throw err;
            console.log('nova pasta criada');
 }) */

// ADD ARQUIVO AO DIREITORIO E FASER A LEITURA
fs.writeFile(
        path.join(__dirname, './', 'hello.txt'), 'Documento Criado com node', 
        (err) => {
            if (err) throw err;
            console.log('Criar e ler documento');
})

// ADD AQUIVO NA PASTA TEXT
fs.writeFile(
        path.join(__dirname, '/text', 'texto.txt'), 'Aquivo adcionado na pasta text', 
        (err) => {
            if (err) throw err;
            console.log('Arquivo add na pasta text');

        addText();
})

// ADCIONAR CONSTEUDO EM AQUIVO EXISTENTE
const addText = function() {
        fs.appendFile(
            path.join(__dirname, '/text', 'texto.txt'), ' Text adicinado agora com uma funcção', 
            (err) => {
                if (err) throw err;
    })
}

// ACESSAR E LER UM ARQUIVO
fs.readFile(
    path.join(__dirname, '/text', 'texto.txt'), 'utf8', 
    (err, data) =>{
        if (err) throw err;
        console.log(data);
})

// RENOMEAR ARQUIVO
fs.rename(
    path.join(__dirname, './', 'hello.txt'), 
    path.join(__dirname, './', 'novo_aquivo.txt'),
    (err) => {
        if (err) throw err;
        console.log('arquivo renomeiado');
    })
