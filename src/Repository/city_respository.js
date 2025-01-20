const { city } = require('../models/index')
const { Op } = require('sequelize')
 
class CityRepository {

    async CreateCity(data) { // created a object with a key name by this synatax we dont need to call obj.name instead we can call simply name 
        try {
            const City = city.create(data);
            // Here technically name : name second name is parameter we are passing and first name is the prperty of the city from the city.js from models 

            return City;
        }
        catch (error) {
            console.log("Something went wrong in repository layer while creating a city")
            throw { error }
        }
    }

    async DeleteCity(CityId) {
        try {
            await city.destroy({
                where: {
                    id: CityId
                    // using where just to delete a city with a certain id just like we did using a raw query in mysql
                }
            })
            return true
        }
        catch (error) {
            console.log("Something went wrong in repository layer while deleting a city")
            throw { error }
        }
    }

    async UpdateCity(CityId , data){    // here data is the object and includes all the data we want to update
        try {
            // const City = await city.update(data , {
            //     where : { 
            //         id : CityId
            //     }
            // })
            // return City
            const City = await city.findByPk(CityId)
            City.name = data.name 
            City.state = data.state
            await City.save()
            return City
        } catch (error) {
            
        }
    }

    async GetCity(CityId){
        try {
            const City = await city.findOne({ where : {
                id : CityId
            }})

            // const City = await city.findByPk(CityId)          //  no need for where here , it will just search with respect to primary key
            return City;
        } catch (error) {
            console.log("Something went wrong in repository layer while getting a city")
            throw {error}
        }
    }

    async GetAllCities(filter){
        try {
            if(filter.name){
                const cities = await city.findAll({
                    where : {
                        name : {
                            [Op.startsWith] : filter.name
                        }
                    }
                })
                return cities;
            }

            const cities = await city.findAll()
            return cities;
            
        } catch (error) {
            console.log("Something went wrong in repository layer while getting a city")
            throw {error}
        }
    }
}


module.exports = CityRepository