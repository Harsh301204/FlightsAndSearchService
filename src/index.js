const express = require('express')

const { PORT } = require('./Config/ServerConfig.js')

const SetupAndStartServer = async () => {

    // Creating the Express Object
    const app = express();

    
    app.listen(PORT, () => {
        console.log(`Server Started on Port ${PORT}`);
        
    })
}

SetupAndStartServer()