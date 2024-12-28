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


