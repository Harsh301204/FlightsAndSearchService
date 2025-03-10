const { CityRespository } = require('../Repository/index')

class CityService {
    constructor ()
    {
         this.cityRepository = new CityRespository();
    }

    async CreateCity(data) {
        try {
            const city = await this.cityRepository.CreateCity(data);
            return city
        } catch (error) {
            console.log("Something went wrong in service layer ")
            throw {error}
        }
    }
    async DeleteCity(CityId) {
        try {
            const response = await this.cityRepository.DeleteCity(CityId)
            return response
        } catch (error) {
            console.log("Something went wrong in service layer")
            throw {error}
        }
    }
    async UpdateCity(CityId, data) {
        try {
            const city = await this.cityRepository.UpdateCity(CityId , data)
            return city
        } catch (error) {
            console.log("Something went wrong in service layer")
            throw {error}
        }
    }
    async GetCity(CityId) {
        try {
            const city =  await this.cityRepository.GetCity(CityId)
            if(city) return city
            else throw {error : "this city does not exist"}
            
        } catch (error) {
            console.log("Something went wrong in service layer")
            throw {error}
        }
    }

    async GetAllCities(filter) {
        try {
            const cities = await this.cityRepository.GetAllCities({name : filter.name , state : filter.state})
            return cities;
        } catch (error) {
            console.log("Something went wrong in service layer")
            throw {error}
        }
    }
}

module.exports = CityService