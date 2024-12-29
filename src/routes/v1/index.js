const express = require('express')
const  CityController  =  require('../../Controllers/City_Controller')

const router = express.Router()

router.post('/city' , CityController.create)


module.exports = router