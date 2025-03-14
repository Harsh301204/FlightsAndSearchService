// const {Airpot} = require('../models/index')
class CrudRepository {
    constructor(model) {
        this.model = model
    }

    async Create(data) {
        try {
            const result = await this.model.create(data)
            return result
        } catch (error) {
            console.log("Something went wrong with CRUD repo")
            throw error
        }

    }
    async Delete(modelId) {
        try {
            await this.model.destroy({
                where: {
                    id: modelId
                }
            })
            return true
        } catch (error) {
            console.log("Something went wrong with CRUD repo")
            throw error
        }
    }
    async get(modelId) {
        try {
            const result = await this.model.findByPk(modelId)
            return result
        } catch (error) {
            console.log("Something went wrong with CRUD repo")
            throw error
        }
    }
    async getAll() {
        try {
            const result = await this.model.findAll()
            return result
        } catch (error) {
            console.log("Something went wrong with CRUD repo")
            throw error
        }
    }
    async update(modelId, data) {
        try {
            const result = await this.model.update( data , {
                where: {
                    id: modelId
                }
            })
            return result
        } catch (error) {
            console.log("Something went wrong with CRUD repo")
            throw error
        }
    }

}

module.exports = CrudRepository