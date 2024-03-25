/*osmódulo em Node.js

O osmódulo em Node.js fornece uma coleção de funções que permitem que seus aplicativos Node.js interajam com o sistema operacional (SO) subjacente. Essa interação inclui tarefas como:

Recuperando informações do sistema: você pode usar o osmódulo para obter vários detalhes sobre o sistema operacional em que seu aplicativo está sendo executado, como:

Nome do sistema operacional (por exemplo, 'linux', 'darwin', 'win32')
Nome do host da máquina
Arquitetura (por exemplo, 'x64', 'braço')
Memoria disponivel
Tempo de atividade
Informações do usuário atual
e mais */

// CARREGAR MODULOS
const os = require('os');

// dados da plataforma ou sistema
console.log(os.platform());

// dados de CPU ARCH
console.log(os.arch());

// CPU core Info
console.log(os.cpus());

// informação do usuario do sistema
console.log(os.userInfo());

// pegar o hostname do dispositivo
console.log(os.hostname());

// ver o diritorio home do sistema
console.log(os.homedir());

// informação de memoria
console.log(os.totalmem());
console.log(os.freemem());

// consultar o tipo de macna
console.log(os.machine());

// verificar os detalhes de rede local
console.log(os.networkInterfaces());

// ver tipo de sistema
console.log(os.type());

// ver a pasta de arquivos temporario
console.log(os.tmpdir());

// consultar o tempo de funcionamento do sistema
console.log(os.uptime());