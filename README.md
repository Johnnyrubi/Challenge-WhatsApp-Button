# WhatsApp Buttons

Bem vindo ao Projeto API WhatsApp Buttons uma API CRUD com conexão MYSQL feita com ORM.

# Descrição

WHatsApp Buttons vem para solucionar um problema, um banco de dados em que é possível guardar dados de um Botão de WhatsApp!
feito utilizando clean code e conceitos SOLID, uma API RESTfull, documentada e testada!

# Requisitos:
Node versão: v16.14.2

MYSQL versão: v8.0.29 


# Configurando o Projeto:
Baixe o Projeto na sua Maquina com o comando:
   - `git clone git@github.com:Johnnyrubi/Challenge-API-Buttons.git`
 
Entre na pasta, e na raiz do projeto execute:
  - `npm i`


crie um arquivo `.env`, e utilize o `.env-example` como exemplo inserindo seus dados, 
lembrando que o nome do banco de dados não pode ser modificado!


# Como rodar:
Agora execute o seguinte Script(este comando irá rodar e colocar no ar o nosso banco de dados):

    -`npm run prestart`
Depois execute:
  - `npm run seed`
(este comando ira semear nosso banco de dados)

Caso queira derrubar nosso banco de dados você pode utilizar:
   - `npm run drop`

Agora utilize:
 - `npm start`

Va ate o seu navegador e digite na URL:
  -`localhost:3000`

# Testes:
!Aviso importante, para rodar os testes você deve ter dois terminais abertos, em um deles você deve ter a aplicação rodando, e no outro aplicar o comando abaixo!
caso a aplicação não esteja rodando no momento dos testes, os mesmos vão falhar!
- `npm run test:integration`

# Documentação da API

| Method | URL | Description |
| ------ | --- | ----------- |
| GET   | / | Para uma requisição de todos os Buttons no Banco de Dados |
| GET   | /`buttonId` | Para uma requisição de um Unico Button |
| POST  | / | Para criar um novo Button |
| PUT   | /`buttonId` | Para atualizar informações de um Button |
| DEL   | /`buttonId` | Para deletar um Button |

# Extra:
Você pode acessar a API via `localhost:3000` como dito em cima mas também pode 
utilizar um API Cliente, neste caso indico o ***POSTMAN*** um excelente programa para fazer requisições HTTP!
link: https://www.postman.com/

Leia mais Sobre:

Sequelize: https://sequelize.org/

MYSQL: https://www.mysql.com/

Docker: https://www.docker.com/
