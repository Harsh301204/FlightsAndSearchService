const express = require('express')
const BodyParser = require('body-parser')
// require('dotenv').config()  we shifted this to ServerConfig file

const { PORT } = require('./Config/ServerConfig.js')

const SetupAndStartServer = async () => {

    // Creating the Express Object
    const app = express();

    app.use(BodyParser.json())
    app.use(BodyParser.urlencoded({extended : true}))

    app.listen(PORT, () => {
        console.log(`Server Started on Port ${PORT}`);
        
    })
}

SetupAndStartServer()