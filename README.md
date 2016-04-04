# Como utilizar o Grunt

## Node
O Grunt roda em Node.js, para ver se voc� tem ele instalado digite no terminal "node -v".
Caso n�o tenha baixe ele em https://nodejs.org e instale.

## CLI
Para usar o Grunt, primeiro voc� precisa instalar uma interface do Grunt para poder utiliza-lo atrav�s do terminal atrav�s do comando "npm install -g grunt-cli".

## package.json
� o arquivo onde indica as depend�ncias do projeto.

## Gruntfile.js
� o arquivo onde voc� configura as depend�ncias do seu projeto, dizendo como elas ir�o se comportar.

## Como usar
Passo 1: Ter os arquivos "package.json" e "Gruntfile.js" na raiz do projeto.

Passo 2: Na raiz do projeto, pelo terminal, digite "npm install".
Ele se encarregara de ler as depend�ncias do projeto e criar uma pasta chamada "node_modules".
Essa pasta n�o precisa ser versionada porque a finalidade do "package.json" � justamente manter as suas depend�ncias em ordem sem a necessidade de voc� perder tempo com esses m�dulos porque eles n�o s�o necess�rios em produ��o.

Passo 3: Na raiz do projeto, pelo terminal digite "grunt" que ele se encarregar� de iniciar todas as tasks, ou voc� pode iniciar uma tarefa em espec�fico.