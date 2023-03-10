const mongoose = require('mongoose')

const houseownerSchema = mongoose.Schema({
    Name : {
        type : String
    },
    Address : {
        type : String
    },
    NumberOfRomms : {
        type : Number
    },
    RoomsDetails : [{
            rooms : String,
            squareft : String,
            mindays : String,
            maxdays : String
        }]
    
})


const HOmodel=mongoose.model('HOmodel',houseownerSchema)

module.exports=HOmodel