# Como utilizar o Grunt

## Node
O Grunt roda em Node.js. Para ver se você tem o Node.js instalado no terminal digite "node -v".
Caso não tenha baixe ele em https://nodejs.org e instale.

## CLI
É uma interface que serve para gerenciar qual versão do Grunt está sendo utilizada nos seus projetos.
No terminal digite "npm install -g grunt-cli".

## package.json
É o arquivo onde indica as dependências do projeto.

## Gruntfile.js
É o arquivo onde você configura as dependências do seu projeto, dizendo como elas irão se comportar através de "tasks".

## Como usar
Passo 1: Adicione os arquivos "package.json" e "Gruntfile.js" na raiz do projeto.

Passo 2: Se for um projeto novo, no terminal, na raiz do projeto instale o Grunt através do comando "npm install grunt --save-dev".

Passo 3: No terminal, acesse a pasta do projeto e digite "npm install".
O nmp se encarregara de ler as dependências do projeto e criar uma pasta chamada "node_modules".
Essa pasta não precisa ser versionada porque a finalidade do "package.json" é justamente manter as suas dependências em ordem sem a necessidade de você perder tempo com esses módulos porque eles não são necessários em produção.

Passo 4: Na raiz do projeto, pelo terminal digite "grunt" que ele se encarregará de iniciar todas as tasks, ou você pode iniciar uma tarefa em específico.