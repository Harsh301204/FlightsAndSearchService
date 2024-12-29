const { city } = require('../models/index')

class CityRepository {
    async CreateCity({name}){
        try{
        const City = city.create({name});
        return City;
        }
        catch(error){
            throw {error}
        }
    }

    async DeleteCity(CityId){
       try{ 
        await City.destroy({
            where : {
                id : CityId
            }
        })
    }
    catch(error){
        throw {error}
    }
}
}


module.exports = CityRepository