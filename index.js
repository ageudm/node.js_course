/*HTTP, 
que significa Hypertext Transfer Protocol, é a base da comunicação na web. Ele define como os dados são trocados entre navegadores e servidores. Aqui está uma análise de seus principais aspectos:

req (objeto de solicitação HTTP de entrada): Fornece informações sobre a solicitação, como método (GET, POST, etc.), URL, cabeçalhos e corpo (se aplicável).
res (objeto de resposta HTTP de saída): usado para enviar dados de volta ao cliente, incluindo configuração de cabeçalhos, códigos de status e corpo da resposta.
*/

// IMPOSTAR / CARREGAR MODULOS
const http = require('http'); // para criar o servidor
const path = require('path'); // para dar manipular aquivos
const fs = require('fs'); // para dar acesso a pastas e arquivos


// TRABALHAR COM CAMINHOS
// Importar arquivos e informação
const Person = require('./documents/person.js'); //Metodo require()
//import Person from './documents/person.js'; // Usando Import
const Logger = require('./documents/event_demo.js')



// CRIAR O PRIMEIRO SERVIDOR HTTP COM NODE
/*
const server = http.createServer((req, res) => {
    // console.log(req.url);

    // Identificar o tipo de documento a ser lido na localhost do navegador
    res.writeHead(200, {'contet-type': 'text/html'})

    // Configurar endereço no servidor
    if (req.url === '/') {
        res.end('<h1>Ageu Miguel</h1>')
    }
}); 

*/

// FAZER A LEITURA DE DOCUMENTO NO SERVIDOR
const server = http.createServer((req, res) => {

   /* // PAGINA HOME
    if (req.url === '/') {
        fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, {'content-type': 'text/html'});
            res.end(content)
        });
    }

    // PAGINA ABOUT
     if (req.url === '/about') {
        fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, {'content-type': 'text/html'});
            res.end(content)
        });
    }

    // CARREGAR DOCUMETO EM JSON
    if (req.url === '/api/users') {
        const users = [
            {name: 'Ageu Miguel', idade: 31},
            {name: 'Alex do santos', idade: 35}
        ];

        res.writeHead(200, {'content-type': 'application/json'});
        res.end(JSON.stringify(users));
    }
     */


    // CRIAR UM CAMINHO PARA LOCALISAR A URL DA PAGINA
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);
    // BUSCAR O ARQUIVO PELA EXTENÇÃO DO DOCUEMNTO
    let extname = path.extname(filePath);
    // conteudo inicial
    let contentType = 'text/html';

    switch(extname) {
        case '.js': contentType = 'text/javascript'; break;
        case '.css': contentType = 'text/css'; break;
        case '.json': contentType = 'aplication/json'; break;
        case '.png': contentType = 'image/png'; break;
        case '.jpg': contentType = 'image/jpg'; break;
    };

    // APRESENTAR O CONTEUDO DA PAGINA
    fs.readFile(filePath, (err, content) =>{
        if(err) {
            if(err.code == 'ENONET') {
                fs.readFile(path.join(__dirname, 'public'), (err, content) => {
                    res.writeHead(200, {'content-type': 'text/html'});
                    res.end(content, 'utf8');
                });
            } else {
                res.writeHead(500);
                res.end(`server code: ${err.code}`)
            }
        } else {
            res.writeHead(200, {'content-type': contentType});
            res.end(content, 'utf8')
        }
    })

});





// CRIAR A PORTA DE ENTRADA DO SERVIDOR
const PORT = process.env.PORT || 5000;
// ACESSAR A PORTA DO SERVIDOR
server.listen(PORT, () => console.log(`O servidor esta na porta: ${PORT}`));


/*

// Acessar dados importados de um arquivo externo
const person1 = new Person('Magi One', 31);
person1.lerData();


// EXECUTAR O EVENTO CRIADO NA CLASSE LOGGER
    const logger = new Logger();
    logger.on('message', (data) => console.log('Imprimir a lista', data));
    logger.log('Angola Linda')
    logger.log('Angola nova')

*/