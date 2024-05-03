<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
  <a href="https://www.prisma.io" target="blank"><img src="https://prismalens.vercel.app/header/logo-white.svg" width="400" alt="Prisma Logo" /></a>
</p>

  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

API for product for crud oprations in nest js and prisma orm.

follow the setup steps below :


## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Prisma Setup

```bash
#dev dependecies of prisma
npm install prisma -D

#prisma setup
npx prisma init
#environmet wariable
DATABASE_URL="postgres://product:productPassword@localhost:5444/product"

```

## Prisma Schema

```
model Product {
  id            Int     @id @default(autoincrement()) // you can use uuid if you want  @default(uuid())
  name          String
  price         Float
  category      String
  description   String? //as this can be optional
  stockQuantity Int
}


```

```bash
#Db migrate
npx prisma migrate dev --name init
#prisma cleint setup
npx nest generate module prisma
npx nest generate service prisma

```

## Testing

```
We can use swagger or postman to test the api.
```

## Author

Kartik Saxena
