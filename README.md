# Material and Supplier management

This project is about to managing material,stock, supplier and category with multiple DB relations such as `ManyToMany` and `OneToMany` which ables you to `create and updating material's info` such as stock and whatever like that also creating `new Category` and `new Suppllier`, note that before creating material you shoould create one supplier and category to get category and supplier ID   

## Tech Stack
    Framework: NestJs
    DB: Postgres  
    ORM: Prisma 
## Create Material  Api
    Endpoint: localhost://3000/material
    Method: POST
    Sample of body: {
      "name": "cucubmber",
      "categoryId": "a0211c3e-cfd0-4479-9cb7-f87000950efa", // get category ID from category API
      "stock": 1800,
      "symbol": "CU",
      "supplierId": "fb6ecb7f-421e-49ee-b869-ea774961dfca"  // get supplier ID from supplier API
    }

## Update One Material
    Endpoint: localhost://3000/material/{materialID}
    Method: PATCH
    Sample of body: {
      "name": "New name of material",
      "stock": 1200 
    }  
## Get All material
    Endpoint: localhost://3000/material
    Method: GET

## Get Material Api
    Endpoint: localhost://3000/material/{materialID}
    Method: GET

## Create Supplier Api
    Endpoint: localhost://3000/supplier
    Method: POST
    Sample of bydy {
      name: 'Sample Supplier'
    }

## Create Category Api
    Endpoint: localhost://3000/category
    Method: POST
    Sample of bydy {
      name: 'Sample Category'
    }

## Get All Category
    Endpoint: localhost://3000/category
    Method: GET

## Get All Supplier
    Endpoint: localhost://3000/supplier
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
