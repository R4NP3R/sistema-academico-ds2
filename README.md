# Sistema Acadêmico DS II

Projeto integrador da disciplina Desenvolvimento para Servidores II.

## Objetivo

Desenvolver gradualmente uma aplicação web para cadastro de alunos,
disciplinas, usuários e lançamento de notas.

## Desenvolvedor

Nome: Rafael Silva Santoss
RA: 2650832423025
Turma: 5º Semestre - Sistemas para Internet

## Instruções para executar o Back End

#### É preciso instalar o node.js para o funcionamento do backend

Ao acessar o diretório do projeto
Abrir o terminal e digitar `cd backend` para acessar o backend.
Rodar o comando `npm install` para instalar as dependências do projeto
Rodar o comando `npm run dev` para inicializar o servidor.
Instruções para executar o frontend

#### É preciso instalar a extensão Live Server para o funcionamento do FrontEnd

Acessar o diretório `sistema-academico-ds2/frontend/js/index.html`
Localizar o **index.html**
Clicar com o botão direito em cima do arquivo **index.html**
Selecionar a opção open with live server

## Endpoints do Back End

#### A API do Sistema Acadêmico DS II disponibiliza os seguintes endpoints:

Método HTTP Endpoint Descrição
GET `/api/health` Verifica se o servidor está funcionando.
GET `/api/alunos` Retorna a lista de alunos cadastrados.
POST `/api/alunos` Cadastra um novo aluno.
URL base: `http://localhost:3000`
Exemplos de utilização
Listar alunos: GET `http://localhost:3000/api/alunos`
Cadastrar aluno: POST `http://localhost:3000/api/alunos`
Verificar servidor: GET `http://localhost:3000/api/health`

## Evidências

As principais evidências do projeto estão salvas em imagens na pasta [sistema-academico-ds2/docs](https://github.com/R4NP3R/sistema-academico-ds2/tree/main/docs/evidencias)

## Tecnologias previstas

- HTML
- CSS
- JavaScript
- Node.js
- Express
- MySQL
- JWT
- Git e GitHub

## Estrutura

- frontend: Visualização Final do usuário
- backend: API e regras do servidor
- database: scripts do banco de dados
- docs: documentação e evidências
