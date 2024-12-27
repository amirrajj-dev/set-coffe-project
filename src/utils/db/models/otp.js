const mongoose = require('mongoose');

const schema = mongoose.Schema({
    phone : {
        type : String ,
        required : true
    },
    code : {
        type : String ,
        required : true
    },
    expTime : {
        type : Number ,
        required : true
    },
})

const otpModel = mongoose.models.otp || mongoose.model('otp' , schema)

export default otpModel