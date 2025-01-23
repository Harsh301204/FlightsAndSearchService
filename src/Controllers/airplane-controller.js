const { AirplaneService } = require('../Services/index')
// const { update } = require('./City_Controller')

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
        await airplaneService.Delete(req.params.id)
        return res.status(200).json({
            data : true,
            success : true,
            err :  {},
            message : "Successfully deleted a Airplane"
        })
    } catch (error) {
        console.log(error)
    }
}

const Update = async (req , res) => {
    try {
        const airplane = await airplaneService.update(req.params.id ,req.body)
        return res.status(201).json({
            data : airplane,
            success : true,
            err : {},
            message : "Successfully updated a Airplane"
        })

    } catch (error) {
        console.log(error)
    }
}

const fetch = async (req , res) => {
    try {
        
    } catch (error) {
        
    }
}

module.exports = {
    create,
    Delete,
    Update
}