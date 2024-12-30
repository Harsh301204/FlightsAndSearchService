# Welcome to Flight Search Service

### Project Setup

- clone the project to your local
- Execute `npm install` on the same path as of the your root directory of the downloaded Project
- create a `.env` file in root directory and add the following environment variables
    - `PORT = 3000`
- Inside the `src/config` folder , create a new file `config.json` with the following peice of json

 ```
{
  "development": {
    "username": <YOUR DB USERNAME>,
    "password": <YOUR DB PASSWORD>,
    "database": "FlightSearch_DataBase_Local",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

 ``` 



 - once you added the above db config , go to your src folder from terminal and execute `npx sequelize db:create`
 - Then You will execute `npx sequelize db:migrate`


## DB Design
- Airplane Table
- Flight 
- Airport
- City

- A Flight Belongs to a Airplane , but an airplane can have multiple flights
- A City has many airports but one airport belongs to a particular city
- One Airport can have many flights but a flight has only one airport


## Tables
- City --> Id , Nmae , Created_at , Updated_at
- Airport --> Id , Name , Address , City_Id , Created_at , Updated_at



## Command to initialize a Model ( Creating a Table in Database)
```
 npx sequelize model:generate --name Airpot --attributes name:String,Address:String,CityId:integer
```

## Command to Create a seeder file 
```
 npx sequelize seed:generate --name add-airpots
```

