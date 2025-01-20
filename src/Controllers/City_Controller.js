const { CityService }  = require('../Services/index')

const cityService = new CityService()

// Here Method Should be POST as we are creating and corresponding data will be from in req.body
const create = async (req, res) => {
    try {
        const city = await cityService.CreateCity(req.body)
        return res.status(201).json({
            data: city,
            success: true,
            message: "Successfully Created a City",
            err: {}
        })
    } catch (error) {
        console.log("There is a error in the Controller Layer")
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to create a City",
            err: { error }
        })
    }
}

// Here we are deleting a city and /city/:id   so req.params.id 
const destroy = async (req, res) => {
    try {
        const response = await cityService.DeleteCity(req.params.id)
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully Deleted a City",
            err: {}
        })
    } catch (error) {
        console.log("There is a error in the Controller Layer")
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to Delete a City",
            err: { error }
        })
    }
}


// patch request => city/:id -> req.body   id will be used to identify which we want to update and req.body will contain data with which we update
const update = async (req, res) => {
    try {
        const response = await cityService.UpdateCity(req.params.id, req.body)
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully Updated a City",
            err: {}
        })
    } catch (error) {
        console.log("There is a error in the Controller Layer")
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to update a City",
            err: { error }
        })
    }
}


// Here request will be a GET request and here we  are just fetching a paricular city with id
const get = async (req, res) => {
    try {
        const response = await cityService.GetCity(req.params.id)
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully Fetched a City",
            err: {}
        })
    } catch (error) {
        console.log("There is a error in the Controller Layer")
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to Delete a City",
            err: { error }
        })

    }
}

const GetAll = async (req , res) => {
    try {
        const cities = await cityService.GetAllCities(req.query);
        return res.status(200).json({
            data: cities,
            success: true,
            message: "Successfully Fetched a City",
            err: {}
        })
        
    } catch (error) {
        console.log("There is a error in the Controller Layer")
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to fetch the Cities",
            err: { error }
        })
    }
}

module.exports = {
    create,
    destroy,
    update,
    get,
    GetAll
}