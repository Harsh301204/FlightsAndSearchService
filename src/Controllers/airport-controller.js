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

const deleteAirport = async (req , res) => {
    try {
        await airportService.Delete(req.params.id)
        return res.status(200).json({
            data : true,
            success : true,
            error : {},
            message : "Deleted a Airport Successfully"
        })
    } catch (error) {
        return res.status(500).json({
            data: {},
            success : false,
            error : error,
            message : "Cannot Delete a Airport"
        })
    }
}


const updateAirport = async (req , res) => {
    try {
        const response = await airportService.update(req.params.id , req.body)
        return res.status(201).json({
            data : response,
            success : true,
            error : {},
            message : "Sucessfully Updated a Airport"
        })
    } catch (error) {
        return res.status(500).json({
            data: {},
            success : false,
            error : error,
            message : "Cannot Update a Airport"
        })
    }
}



module.exports = {
    create,
    deleteAirport,
    updateAirport
}