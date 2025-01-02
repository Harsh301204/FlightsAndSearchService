const { ClientErrorCodes } = require('../utils/error-codes')
const validateCreateFlight = ( req , res , next) => {

    if(

        !req.body.airplaneId ||
        !req.body.flightNumber ||
        !req.body.departureAirportId ||
        !req.body.arrivalAirportId ||
        !req.body.departureTime ||
        !req.body.arrivalTime ||
        !req.body.price 

        )
    {
        return res.status(ClientErrorCodes.BAD_REQUEST).json({
            data : {},
            success : false ,
            message : "Invalid request body to create a flight",
            err : "Mising Mandatory Properties to create a flight"
        })
    }

    next()
}




module.exports = {
    validateCreateFlight
}









// flightNumber
//     airplaneId
//     departureAirportId
//     arrivalAirportId
//     departureTime
//     arrivalTime
//     price
//     boardingGate  - Not Mandatory