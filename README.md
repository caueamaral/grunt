# Como utilizar o Grunt

## Node
O Grunt roda em Node.js. Para ver se voc� tem o Node.js instalado no terminal digite "node -v".
Caso n�o tenha baixe ele em https://nodejs.org e instale.

## CLI
� uma interface que serve para gerenciar qual vers�o do Grunt est� sendo utilizada nos seus projetos.
No terminal digite "npm install -g grunt-cli".

## package.json
� o arquivo onde indica as depend�ncias do projeto.

## Gruntfile.js
� o arquivo onde voc� configura as depend�ncias do seu projeto, dizendo como elas ir�o se comportar atrav�s de "tasks".

## Como usar
Passo 1: Adicione os arquivos "package.json" e "Gruntfile.js" na raiz do projeto.

Passo 2: Se for um projeto novo, no terminal, na raiz do projeto instale o Grunt atrav�s do comando "npm install grunt --save-dev".

Passo 3: No terminal, acesse a pasta do projeto e digite "npm install".
O nmp se encarregara de ler as depend�ncias do projeto e criar uma pasta chamada "node_modules".
Essa pasta n�o precisa ser versionada porque a finalidade do "package.json" � justamente manter as suas depend�ncias em ordem sem a necessidade de voc� perder tempo com esses m�dulos porque eles n�o s�o necess�rios em produ��o.

Passo 4: Na raiz do projeto, pelo terminal digite "grunt" que ele se encarregar� de iniciar todas as tasks, ou voc� pode iniciar uma tarefa em espec�fico.