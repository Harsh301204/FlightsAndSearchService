const { StatusCodes } = require('http-status-codes')

class AppError extends Error {
    constructor(name = 'AppError'
        ,message = 'Something Went Wrong'
        ,explaination = []
        ,statusCode = StatusCodes.INTERNAL_SERVER_ERROR
    )
    {
        super()
        this.name = name,
        this.message = message,
        this.explaination = explaination,
        this.statusCode = statusCode
    }

}

module.exports = AppError