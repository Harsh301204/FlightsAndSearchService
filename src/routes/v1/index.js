const express = require('express')
const  CityController =  require('../../Controllers/City_Controller')
const FlightController = require('../../Controllers/flight-controller')

const router = express.Router()

router.post('/city' , CityController.create)
router.delete('/city/:id',CityController.destroy)
router.get('/city/:id',CityController.get)
router.get('/city' , CityController.GetAll)
router.patch('/city/:id',CityController.update)

router.post('/flights' , FlightController.create)


module.exports = router