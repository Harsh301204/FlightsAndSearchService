const { AirportService } = require('../Services/index')

const airportService = new AirportService

const create = async (req , res) => {
    try {
        const airport = await airportService.Create(req.body)
        return res.status(201).json({
            data : airport,
            success : true,
            error : {},
            message : "Created a Airport Successfully"
        })
        } catch (error) {
            return res.status(500).json({
                data: {},
                success : false,
                error : error,
                message : "Cannot create a Airport"
            })
        
    }
}



module.exports = {
    create
}