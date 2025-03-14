const express = require('express')
const { CityController , FlightController , AirplaneController , AirportController} = require('../../Controllers/index')
const { FlightMiddlewares } = require('../../Middlewares/index')

const router = express.Router()

router.post('/city' , CityController.create)
router.delete('/city/:id',CityController.destroy)
router.get('/city/:id',CityController.get)
router.get('/city' , CityController.GetAll)
router.patch('/city/:id',CityController.update)

router.post('/flights' ,FlightMiddlewares.validateCreateFlight, FlightController.create)
router.get('/flights' , FlightController.GetAll)
router.get('/flights/:id' , FlightController.GetFlight)
router.patch('/flights/:id' , FlightController.updateFlight)

router.post('/airport' , AirportController.create)
router.delete('/airport/:id' , AirportController.deleteAirport)
router.patch('/airport/:id' , AirportController.updateAirport)


router.post('/airplane' , AirplaneController.create)
router.delete('/airplane/:id' , AirplaneController.Delete)
router.patch('/airplane/:id' , AirplaneController.Update)
router.get('/airplane/:id' , AirplaneController.fetch)


module.exports = router 