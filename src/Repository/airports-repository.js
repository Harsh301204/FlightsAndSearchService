const CrudRepository = require('./crud-repository')
const { Airpot } = require('../models/index')
class AirportRepository extends CrudRepository{
    constructor(){
        super(Airpot)
    }
}

module.exports = AirportRepository





// class A {
//     print(){
//         console.log("simple example of above")
//     }
// } 

// class B extends A {
//     constructor(){
//         super()
//     }
// }

// const C = new B;
// C.print()
