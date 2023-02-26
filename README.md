# Projeto My Space
<img></img>

## 👨🏻‍💻 Sobre o projeto

Essa é uma apicação possíbilita ao usuário criar uma conta no serviço, o que na api é denominado de `client`. Com o cadastro feito o usuário é direcionado a página de login, onde será realizada a confirmação dos dados fornecidos na requisição.

Em caso de confirmação positiva dos dados o usuário é direcionado à página principal da aplicação. 

Na página principal, o usuário tem algumas informações mostradas, como os contatos que possuí e que estão vinculadas a sua conta, além das suas próprias informações de contato. Além disso, com um clique é possível gerar um relatório em pdf contendo os contatos que o cliente possui, junto com as informações de contato. Na aplicação há também uma lista de tarefas, onde o usuário pode gerir tarefas e afazeres.

Há também a possíbilidade de criar contatos novos contatos com informações `email`, `telefone` e `nome`, diferente dos que já existe e estão vinculados com sua conta. 

Com todas as funcionalidades presentes, o usuário possui o "seu espaço" para gerir tarefas e contatos que queira armazenar.

Essa é uma aplicação que possui front-end e back-end e se encontra com os arquivos docker para que a aplicação seja executada em um container docker.

## 💻 Clonando projeto

```bash
$ git clone git@github.com:GeovaneSO/customer_base.git
```

## Criar e rodar a aplicação em um container

Além disso, é necessário configurar os arquivos `.env` do diretório `./api`, assim erros na criação dos containers serão evitados. 

Antes de rodar o servidor, certifique-se de ter especificado no arquivo schema.prisma, dentro do diretório `./api`, a o database_url correto, para rodar a aplicação em um container Docker o database_url correto é o `DATABASE_URL` demonstrado no arquivo .env.example. Para rodar a aplicação fora do container o database_url correto é o `DATABASE_URL_LOCAL`, também exemplificado dentro do arquivo .env.example, encontrado no direttório  `./api`.

### Na raiz do projeto

Use o comando com o aplicativo Docker Desktop em execução:
```bash
$ docker compose up --build
``` 
ou
```bash
$ docker-compose up --build
```

Ao executar esse comando os respectivos containers serão criados e a aplicação poderá ser usada localmente.

Com os containers em execução, a aplicação será executada em duas portas distintas, são elas: `http://localhost:3000` e `http://localhost:4000`

A primeira porta é referente ao front-end, logo, a segunda é a porta que o serivdor está sendo executado no container.

Obs.: Há um workspace do insomnia, se desejar testar apenas a api!

## Criar e rodar a aplicação fora do Docker


### Instalar as dependências do projeto

Caso queira instalar o projeto na sua máquina, os seguintes comandos são necessários:

Apartir do diretório principal, execute

```bash
$ cd api
``` 

Para entrar no diretório `./api`.

```bash
$ cd client
``` 

Para entrar no diretório `./client`

Dentro de cada diretório será necessário instalar as depências das aplicações, usando o seguinte comando:

```bash
$ yarn
``` 

ou

```bash
$ yarn install
``` 

Antes de rodar o servidor, certifique de ter especificado no arquivo schema.prisma a o dattabase_url correto, no caso é o `DATABASE_URL_LOCAL` demonstrado no arquivo .env.example

Com as depêndencias do projeto devidamente instaladas, em cada diretório será necessário executar a aplicação.

No diretório `./client`

```bash
$ yarn start
``` 

No diretório `./api`

```bash
$ yarn start:migrate:dev
``` 

Com isso a aplicação será executada.

## Funcionalidades

- Login
- Registro
- Criação e listagem completa de contatos
- Criação e listagem de completa tarefas
- Upload de imagens
- Responsividade completa
- Alteração de tema `(dark/ligth)`

## 🚀 Tecnologias utilizadas

### Back-end

- [Docker](https://www.docker.com/)
- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [NestJS](https://nestjs.com/)
- [Postgres](https://www.postgresql.org/)
- [PrismaORM](https://www.prisma.io/)
- [PDFMake](http://pdfmake.org/)
- [Passport](https://www.passportjs.org/)
- [JWT](https://jwt.io/)

### Front-end

- [Docker](https://www.docker.com/)
- [ReactJS](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [NodeJs](https://nodejs.org/en/)
- [Styled-components](https://styled-components.com/)
- [Cloudinary](https://cloudinary.com/)
- [AOS](https://michalsnik.github.io/aos/)
- [React-Hook-Forms](https://react-hook-form.com/)
- [React-Icons](https://react-icons.github.io/react-icons)
- [React-Lottie](https://lottiefiles.com/blog/working-with-lottie/how-to-use-lottie-in-react-app)