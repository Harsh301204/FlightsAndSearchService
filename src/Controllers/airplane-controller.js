const { AirplaneService } = require('../Services/index')

const airplaneService = new AirplaneService()

const create = async (req , res) => {
    try {
        const airplane = await airplaneService.Create(req.body)
        return res.status(201).json({
            data : airplane,
            success : true,
            err : {},
            message : "Successfully created a Airplane"
        })
    } catch (error) {
        
    }
}

const Delete = async (req , res) => {
    try {
        
    } catch (error) {
        
    }
}

const Update = async (req , res) => {
    try {
        
    } catch (error) {
        
    }
}

const fetch = async (req , res) => {
    try {
        
    } catch (error) {
        
    }
}

module.exports = {
    create
}