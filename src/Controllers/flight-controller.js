const { FlightService } = require('../Services/index')

const flightService  = new FlightService;

const create  = async (req , res) => {
    try {
        const flight = await flightService.CreateFlight(req.body)
        return res.status(201).json({
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

module.exports = {
    create
}