const express = require('express')
const  CityController =  require('../../Controllers/City_Controller')

const router = express.Router()

router.post('/city' , CityController.create)
router.delete('/city/:id',CityController.destroy)
router.get('/city/:id',CityController.get)
router.get('/city' , CityController.GetAll)
router.patch('/city/:id',CityController.update)


module.exports = router