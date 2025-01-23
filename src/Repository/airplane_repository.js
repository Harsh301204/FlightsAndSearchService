const{ Airplane } = require('../models/index')
const CrudRepository = require('./crud-repository')

class AirplaneRepository extends CrudRepository{
    constructor(){
        super(Airplane)
    }


    async update(id , data){
        try {
            const result = await Airplane.findOne( {
                where: {
                    id: id
                }
            })

            if(data.Capacity) result.Capacity = data.Capacity
            if(data.ModelNumber) result.ModelNumber = data.ModelNumber
            
            await result.save()
            return result
        } catch (error) {
            console.log("Something went wrong with CRUD repo")
            throw error
        }
    }


    // async getAirplane(id)
    // {
    //     try {
    //         const airplane = await Airplane.findByPk(id)
    //         return airplane
    //     } catch (error) {
    //         console.log("Something went wrong in repository layer ")
    //         throw { error }
    //     }
    // }
}

module.exports = AirplaneRepository