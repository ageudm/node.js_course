/*
urlMódulo Node.js.

Node.js fornece um módulo integrado urlpara analisar e manipular URLs. Ele oferece duas funcionalidades principais:

Análise de URLs: Transforme uma string de URL em um objeto URL com propriedades que representam seus vários componentes (protocolo, nome do host, porta, nome do caminho, pesquisa, consulta, hash).
Construindo URLs: Crie uma string de URL a partir de um objeto contendo esses componentes. */

const url = require('url')

// ADCIONAR UMA URL NORMAL
const myUrl = 'https://github.com/ageudm/node.js_course';

// criar um objecto literal com os dados da url
const parceUrl = url.parse(myUrl);
console.log(parceUrl);

// CRIAR UM NOVO OBJECTO URL APARTIR DA CLASSE URL PARA TER O ACESSO A CAADA DADO
const myUrl2 = new URL('https://github.com/ageudm/node.js_course');

// Acessar as props da url
console.log(myUrl2.protocol);
console.log(myUrl2.host);

// CRIAR UM OBJECTO PARA URL
const urlObject = {
  protocol: 'https',
  hostname: 'www.example.com',
  pathname: '/about',
  query: { name: 'John Doe' }
};

const constructedUrl = url.format(urlObject);
console.log(constructedUrl); // Output: https://www.example.com/about?name=John%20Doe