# Como utilizar o Grunt

## Node
O Grunt roda em Node.js. Para ver se você tem o Node.js instalado no terminal digite "node -v".
Caso não tenha baixe ele em https://nodejs.org e instale.

## CLI
É um interface que você precisa instalar para poder utilizar o Grunt através do terminal.
No terminal digite "npm install -g grunt-cli".

## package.json
É o arquivo onde indica as dependências do projeto.

## Gruntfile.js
É o arquivo onde você configura as dependências do seu projeto, dizendo como elas irão se comportar.

## Como usar
Passo 1: Adicione os arquivos "package.json" e "Gruntfile.js" na raiz do projeto.

Passo 2: No terminal, acesse a pasta do projeto e digite "npm install".
O nmp se encarregara de ler as dependências do projeto e criar uma pasta chamada "node_modules".
Essa pasta não precisa ser versionada porque a finalidade do "package.json" é justamente manter as suas dependências em ordem sem a necessidade de você perder tempo com esses módulos porque eles não são necessários em produção.

Passo 3: Na raiz do projeto, pelo terminal digite "grunt" que ele se encarregará de iniciar todas as tasks, ou você pode iniciar uma tarefa em específico.