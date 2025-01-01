class CrudService {
    constructor(repository){
        this.repository = repository
    }

    async Create(data){
        try {
            const result = await this.repository.Create(data)
            return result
        } catch (error) {
            console.log("something went wrong in crud service")
            throw error
        }
    }

    async Delete(id){
        try {
            const result = await this.repository.Delete(id)
        } catch (error) {
            console.log("something went wrong in crud service")
            throw error
        }
    }

    async get(id){
        try {
            const result = await this.repository.get(id)
        } catch (error) {
            console.log("something went wrong in crud service")
            throw error
        }
    }

    async getAll(){
        try {
            const result = await this.repository.getAll()
           return result
        } catch (error) {
            console.log("something went wrong in crud service")
            throw error
        }
    }

    async update(id,data){
        try {
            const result = await this.repository.update(id,data)
            return result
        } catch (error) {
            console.log("something went wrong in crud service")
            throw error
        }
    }


    
}


module.exports = CrudService