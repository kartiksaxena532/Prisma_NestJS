<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest


  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
#node modules install
$npm i
#initialize nest cli
$npm i -g @nestjs/cli
#make nest new product
$nest new  product

```

## Running the app
```bash
# watch mode
$ npm run start:dev

```

## Prisma Setup

```bash
#dev dependecies of prisma
$npm install prisma -D

#prisma setup
$npx prisma init
#environmet wariable
$DATABASE_URL="postgres://product:productPassword@localhost:5444/product"
#Db migrate
$npx prisma migrate dev --name init
#prisma cleint setup
$npx nest generate module prisma
$npx nest generate service prisma

```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
