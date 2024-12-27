const mongoose = require('mongoose')
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const phoneRegex = /^09\d{9}$/
const schema = mongoose.Schema({
    email : {
        type : String,
        required : false,
        unique : true ,
        index : true ,
        match : emailRegex,
        trim : true
    },
    password : {
        type : String ,
        required : false ,
        trim : true
    },
    name : {
        type : String ,
        required : true ,
        minLength : 8,
        trim : true
    },
    phone : {
        type : String ,
        required : true ,
        match : phoneRegex,
    },
    role : {
        required : true ,
        type : String ,
        enum : ['admin' , 'user'],
        default : 'user'
    },
    profile : {
        type : String ,
        required : false ,
    },
    refreshToken : String,
    username: { type: String, required: false },
    rememberMeInAddingNewComment: { type: Boolean, default: false },
})

const usersModel = mongoose.models.user || mongoose.model('user' , schema)
export default usersModel;