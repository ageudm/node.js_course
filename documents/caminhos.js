// MANIPULAR AS PROPS DE UMA CAMINHO
// dirname: obtém a pasta pai de um arquivo
// basename: obtém a parte do nome do arquivo
// extname: obtém a extensão do arquivo

const path = require('node:path'); // Modules
const file = './documents/person.js'; // Caminhos

// Forma padrão para Acessar a propriedade do caminho especificado
const namedir = path.dirname(file); // Caminho / diretorio
const nameBase = path.basename(file); // Arquivo
const nameExt = path.extname(file); // Extenção

// Outras formas de acessar as props de um caminho
const namedir2 = path.dirname(__filename); // Caminho / diretorio
const nameBase2 = path.basename(__filename); // Arquivo
const nameExt2 = path.extname(__filename) // Extenção

// Ver as props em um objecto
const objProps = path.parse(__filename);
const objPropsbase = path.parse(__filename).base;

// Concatenar e adcionar directorios e arwuivos
const concatePath = path.join(__dirname, 'concat', 'helo.html'); 


console.log(objProps);
console.log(objPropsbase);
console.log(concatePath);