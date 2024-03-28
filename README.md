ESTUDO DO NEDE JS
--------------------------------------------

*Objcetos de estudo*
-------------------------------------------
    HTTP (status, codes, headers .etc)
    JSON
    Arrow Function
    Promises
    MVC Pattern

*Tipo de projectos construido com Node.js*
------------------------------------------------
REST API & Microsevices
Real Time Services (Chats, Live, Updates)
CRUD APPS (Blogs, Shopping Carts, Social Networks)
Tools & Utilities

*Npm (Node Package Manager)*
----------------------------------------------
npm: 
ferramenta essencial para gerenciamento de pacotes JavaScript

Para projetos Node.js: 
npm é o gerenciador de pacotes padrão para Node.js, um ambiente de tempo de execução que permite executar código JavaScript fora de um navegador da web.

Gerenciamento de pacotes: 
atua como uma ferramenta de linha de comando e repositório online (o registro npm) para gerenciar código reutilizável escrito em JavaScript (e às vezes em outras linguagens).

Vasto ecossistema: 
O npm Registry oferece uma enorme coleção de módulos pré-escritos (pacotes) que fornecem várias funcionalidades para desenvolvimento web, manipulação de dados, testes e muito mais.

*Usando npm em seus projetos JavaScript*

Configuração do projeto: 
ao iniciar um projeto Node.js, você o inicializa usando *npm init (ou yarn init)*. Isso cria um package.jsonarquivo que lista as dependências do seu projeto.

*package.json* 
arquivo é um componente vital em projetos Node.js. Ele atua como um arquivo manifesto, armazenando informações essenciais sobre o seu projeto, incluindo:

*Elementos centrais*

Nome: 
O nome do seu projeto (deve ser exclusivo no Registro npm).

Versão: 
A versão do seu projeto (normalmente segue os padrões de controle de versão semântico: major.minor.patch).

Descrição: 
Uma breve descrição do propósito do seu projeto.

Principal: 
o ponto de entrada do seu aplicativo Node.js (o arquivo JavaScript que inicia a execução). Geralmente é index.jsou app.js.

Scripts: 
uma seção onde você pode definir comandos personalizados a serem executados usando npm run <script-name>. Esses scripts podem automatizar tarefas como testar, construir ou iniciar o servidor de desenvolvimento.

Palavras-chave: 
palavras-chave opcionais para ajudar as pessoas a descobrirem seu projeto ao pesquisar no registro npm.

Autor: 
Informações sobre o(s) autor(es) do projeto.

Licença: 
A licença sob a qual seu projeto é distribuído (por exemplo, MIT, GPL).

Elementos opcionais (dependendo das necessidades do projeto):

Dependências: 
uma lista de pacotes de terceiros dos quais seu projeto depende para funcionar. Esses pacotes normalmente são instalados npm install <package-name>e armazenados na node_modulespasta. Você pode especificar intervalos de versões para garantir a compatibilidade.

Dependências de desenvolvimento: 
semelhantes às dependências, mas esses pacotes são necessários apenas durante o desenvolvimento (por exemplo, para testes, linting de código). Eles não são necessários para que o aplicativo seja executado em produção e geralmente são instalados usando o npm install <package-name> --save-dev.

Repositório: 
A URL do repositório de controle de versão (como Git) onde o código do seu projeto está hospedado.


Gerenciamento de dependências: 
você especifica os pacotes JavaScript que seu projeto precisa (dependências) e suas versões em *package.json*. Comandos como *npm install* <package-name>são usados ​​para instalar essas dependências.

Instalação: 
A execução npm installbaixa o pacote solicitado e suas dependências do Registro npm, armazenando-os na *node_modules* pasta dentro do seu projeto.

Usando pacotes: 
uma vez instalados, você importa a funcionalidade fornecida por esses pacotes em seu código JavaScript usando a *require instrução: *const myPackage = require('my-package')*;

*npm install express*
Este comando instala a pakage locally

*npm install -D nodemon* 
--save-dev: Esta opção (ou -D abreviada) diz ao npm para adicionar o Nodemon como uma dependência de desenvolvimento ao package.json arquivo do seu projeto. 
Isso é importante porque o Nodemon só é necessário durante o desenvolvimento para reiniciar automaticamente seu aplicativo Node.js quando você faz alterações em seu código.

*node_modules*
pasta é um diretório crucial no seu projeto Node.js. Ele serve como local de armazenamento para todos os pacotes de terceiros e suas dependências dos quais seu projeto depende para funcionar.


*Node core modules*
Modules padrão pre-instalados (path, fs, http, etc...)


******************************************************
       CONFIGURANDO O NODE PARA PROECTOS
*****************************************************
COMANDOS INICIAIS
npm init (Para configurar a pakage.json)

npm install uuid (Para instalar Identificadores Univelamente Unicos)

npm install -D nodemon (Dependencia para reiniciar o aplicativo automaticamente sempre que for alterado)

npm install (Para instação da pasta de modulos)

OBS:
A pasta node-modules, pode ser eliminada ou ignorada depois de concluir a aplicação ou ao fazer o depload de aplicação

DOCUMENTOS PRINCIPAI PARA INICIAR UM PROJECTO
index.js (pasta principal que é lido pelo node)
