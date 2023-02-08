# customer_base


## Fluxo da aplicação

Essa é uma apicação possíbilita ao usuário criar uma conta no serviço, o que na api é denominado de `client`. Com o cadastro feito o usuário é direcionado a página de login, onde será realizada a confirmação dos dados fornecidos na requisição.

Em caso de confirmação positiva dos dados o usuário é direcionado à página principal da aplicação. 

Na página principal, o usuário tem algumas informações mostradas, como os contatos que possuí e que estão vinculadas a sua conta, além das suas próprias informações de contato. Além disso, com um clique é possível gerar um relatório em pdf contendo os contatos que o cliente possui, junto com as informações de contato.

Há também a possíbilidade de criar contatos novos contatos com informações `email`, `telefone` e `nome`, diferente dos que já existe e estão vinculados com sua conta. 

Essa é uma aplicação que possui front-end e back-end e se encontra com os arquivos docker para que a aplicação seja executada em um container docker.

## Comandos

Iniciar o serviço da aplicação

Criar e rodar o container

### Use o comando `docker compose up --build` ou `docker-compose up --build`

Os comandos acima devem ser executados com o aplicativo Docker Desktop em execução. 

Além disso, é necessário configurar os arquivos `.env` dos diretórios `./api` e `./client`, assim erros na criação dos containers serão evitados. Cada diretório possui seu .env particular, juntamente com suas instuções no .env.example

Com os containers em execução, a aplicação será executada em duas portas, são elas: `http://localhost:3000` e `http://localhost:4000`

A primeira porta é referente ao front-end, logo, a segunda é a porta que o serivdor está sendo executado no container.

Obs.: Há um workspace do insomnia, se desejar testar apenas a api!

## Instalar as dependências do projeto

Caso queira instalar o projeto na sua máquina, os seguintes comandos são necessários:

Apartir do diretório principal, execute
### `cd api` 

Para entrar no diretório `./api`.

### `cd client`

Para entrar no diretório `./client`

dentro de cada diretório será necessário instalar as depências das aplicações

### `yarn` ou `yarn install`

Com as depêndencias do projeto devidamente instaladas, em cada diretório será necessário executar a aplicação.

Antes de rodar o servidor, ceertifique de ter especificado no arquivo schema.prisma a o dattabase_url correto, no caso é o `DATABASE_URL_LOCAL` demonstrado no arquivo .env.example

### `yarn start` no diretório ./client e `yarn start:dev` no diretório ./api

Com isso a aplicação estará devidamente executada.

## Técnologias utilizadas

### Back-end

A APIRest foi desenvolvid com o PrismaORM, Postgres, NestJS, BcryptJS, TypeScript, Passport, JWT, PDFMake

### Front-end

O Client foi feito em ReactJS, TypeScript, React-router-dom, react-hook-form
