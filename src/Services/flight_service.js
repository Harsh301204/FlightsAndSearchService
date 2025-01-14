const { FlightRepository , AirplaneRepository } = require('../Repository/index')

const { CompareTime } = require('../utils/helper')

class FlightService {

    constructor(){
        this.airplaneRepository = new AirplaneRepository(),
        this.flightrepository = new FlightRepository()
    }
    async CreateFlight(data){
        try {
            if(!CompareTime(data.arrivalTime , data.departureTime))
            {
                throw{error : 'arrival Time can not be less than departure time'}
                
            }
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId)
            const flight = await this.flightrepository.createFlight({...data , totalSeats : airplane.Capacity})
            return flight
        } catch (error) {
            console.log("Something went wrong in service layer")
            throw {error}
        }
    }

    async getAllFlightData(data){
        try {
            const flights = await this.flightrepository.GetAllFlights(data)
            return flights;
        } catch (error) {
            console.log("Something went wrong in service layer")
            throw {error}
        }
    }

    async getFlight(id){
        try {
            const flight = await this.flightrepository.GetFlight(id)
            return flight;
        } catch (error) {
            console.log("something went wrong in service layer")
            throw {error}
        }
    }
}


module.exports = FlightService

/*
    flightNumber
    airplaneId
    departureAirportId
    arrivalAirportId
    departureTime
    arrivalTime
    price
    boardingGate
    totalSeats -> will get from airplane

*/