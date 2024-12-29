const { cityService } = require('../Services/index')

const CityService = new cityService()

// Here Method Should be POST as we are creating and corresponding data will be from in req.body
const create = async (req, res) => {
    try {
        const city = await CityService.CreateCity(req.body)
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
        const response = await CityService.DeleteCity(req.params.id)
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
        const response = await CityService.UpdateCity(req.params.id, req.body)
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
            message: "Not able to update a City",
            err: { error }
        })
    }
}


// Here request will be a GET request and here we  are just fetching a paricular city with id
const get = async (req, res) => {
    try {
        const response = await CityService.GetCity(req.params.id)
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

module.exports = {
    create,
    destroy,
    update,
    get
}