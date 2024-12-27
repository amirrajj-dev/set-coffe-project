const mongoose = require('mongoose')

const schema = mongoose.Schema({
    email : {
        type : String , 
        required : true 
    },
    name : {
        type : String , 
        required : true 
    },
    company : {
        type : String , 
        required : false 
    },
    phone : {
        type : String , 
        required : false
    },
    message : {
        type : String , 
        required : true 
    }
} , {
    timestamps : true
})

const contactModel = mongoose.models.contact || mongoose.model('contact' , schema)

export default contactModel; 