# Category and Subcategory feature

This project assists you to create category and subcategory by rest api which  also able you to update them, in addition, this project handled by prisma and relational db.

## Create category Api
    Endpoint: localhost://3000/category
    Method: POST
    Sample of body: {
      "title": "This is a category title",
      "parent_id": ""
    }

## Create subcategory Api
    Endpoint: localhost://3000/category/
    Method: POST
    Sample of body: {
      "title": "This is a sabcategory title",
      "parent_id": "" // 75b65ddb-fd51-458f-b349-6a05bd4163df
    }

## Update category and subcategory
    Endpoint: localhost://3000/category/{categoryID}
    Method: PATCH
    Sample of body: {
      "title": "This is a sabcategory title",
      "parent_id": "" // 75b65ddb-fd51-458f-b349-6a05bd4163df
    }  
## Get all categories

    Endpoint: localhost://3000/category
    Method: GET

## Get one category

    Endpoint: localhost://3000/category/{category_id}
    Method: GET

## Migration
    npx prisma migrate dev {migration name}  

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
