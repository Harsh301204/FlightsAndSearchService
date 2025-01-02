const { FlightService } = require('../Services/index')
const { SuccessCodes } = require('../utils/error-codes')
const flightService  = new FlightService;

const create  = async (req , res) => {
    try {
        const RequestBodyData = {

            airplaneId : req.body.airplaneId,
            flightNumber : req.body.flightNumber,
            departureAirportId : req.body.departureAirportId,
            arrivalAirportId : req.body.arrivalAirportId,
            departureTime : req.body.departureTime,
            arrivalTime : req.body.arrivalTime,
            price : req.body.price,
            boardingGate : req.body.boardingGate

        }
        const flight = await flightService.CreateFlight(RequestBodyData)
        return res.status(SuccessCodes.CREATED).json({
            data: flight,
            success : true,
            err : {},
            message : "Successfully Created a Flight"
        })
    } catch (error) {
        console.log("There is a error in the Controller Layer")
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to create a Flight",
            err: { error }
        })
    }
}

const GetAll = async (req , res) => {
    try {
        const flight = await flightService.getAllFlightData(req.query)
        return res.status(201).json({
            data : flight,
            success : true,
            err : {},
            message : "Successfully Fetched the flights"
        })
    } catch (error) {
        console.log("There is a error in the Controller Layer")
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to Fetch the Flight Details",
            err: { error }
        })
    }
}

module.exports = {
    create,
    GetAll
}