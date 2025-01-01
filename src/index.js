const express = require('express')
const BodyParser = require('body-parser')
// require('dotenv').config()  we shifted this to ServerConfig file
const APIrout = require('./routes/index.js')

const { PORT } = require('./Config/ServerConfig.js')

// const {Airpot , city } = require('./models/index.js') 
const { Airplane } = require('./models/index.js')
const db = require('./models/index.js')



const SetupAndStartServer = async () => {

    // Creating the Express Object
    const app = express();

    app.use(BodyParser.json())
    app.use(BodyParser.urlencoded({extended : true}))
    app.use('/api' , APIrout)

    app.listen(PORT, async () => {
        console.log(`Server Started on Port ${PORT}`);

        if(process.env.SYNC_DB) {
            db.sequelize.sync({alter : true})
        }

        
        

        // const airp = await city.findOne({
        //     where: {
        //         id : 10
        //     }
        // })
        
        // const airpots = await airp.getAirpots()
        // const newAirpot = await Airpot.create({
        //     name : 'Indira Gandhi International Airport',
        //     CityId : 4
            
        // })
        // await airp.addAirpot(newAirpot)
        // //     // console.log(airpots)
        //     console.log(airp , airpots)
        // // console.log(airp)

        const  airplanes  = await Airplane.create({    // Here it got inserted with the capacity on its default value
            ModelNumber : 'Lockheed C-130 Hercules'

        })
        
        
    })
}

SetupAndStartServer()