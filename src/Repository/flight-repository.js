const { Flights } = require('../models/index')
const { Op } = require('sequelize')

class FlightRepository {

    #createFilter(data)                 // Private Function , Other Member function does not know about this 
    {
        let filter = {}
        if (data.arrivalAirportId) {
            filter.arrivalAirportId = data.arrivalAirportId
        }
        if (data.departureAirportId) {
            filter.departureAirportId = data.departureAirportId
        }
        // if (data.minPrice) {
        //     Object.assign(filter, { price: { [Op.gte]: data.minPrice } })

        // }

        // if (data.maxPrice) {
        //     Object.assign(filter, { price: { [Op.lte]: data.maxPrice } })
        // }


        // if (data.minPrice && data.maxPrice) {
        //     Object.assign(filter, {
        //         [Op.and]: [
        //             { price: { [Op.gte]: data.minPrice } },
        //             { price: { [Op.lte]: data.maxPrice } }
        //         ]
        //     })
        // }

        let PriceFilter = []
        if (data.minPrice) {
            // Object.assign(filter, { price: { [Op.gte]: data.minPrice } })
            PriceFilter.push({ price: { [Op.gte]: data.minPrice } })

        }

        if (data.maxPrice) {
            //     Object.assign(filter, { price: { [Op.lte]: data.maxPrice } })
            PriceFilter.push({ price: { [Op.lte]: data.maxPrice } })
        }

        Object.assign(filter, { [Op.and]: PriceFilter })



        return filter;
    }

    async createFlight(data) {
        try {
            const flight = await Flights.create(data)
            return flight;
        } catch (error) {
            console.log("Something went wrong in repository layer while creating a city")
            throw { error }
        }

    }

    async GetFlight(Flightid) {
        try {

            const flight = await Flights.findOne({
                where: {
                    id: Flightid
                }
            })


            return flight;
        } catch (error) {
            console.log("Something went wrong in repository layer while creating a city")
            throw { error }
        }
    }

    async GetAllFlights(filter) {
        try {
            const filterObject = this.#createFilter(filter)
            const flight = await Flights.findAll({
                where: filterObject
            })
            return flight;
        } catch (error) {
            console.log("Something went wrong in repository layer while creating a city")
            throw { error }
        }
    }

    async updateFlight(FlightId, data) {
        try {
            await Flights.update(data, {
                where: {
                    id: FlightId
                }
            })
        } catch (error) {
            console.log("Something went wrong in repository layer while creating a city")
            throw { error }

        }
    }
}

module.exports = FlightRepository