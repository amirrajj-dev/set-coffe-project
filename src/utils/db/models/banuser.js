const mongoose = require('mongoose')

const schema = mongoose.Schema({
   phone : {
    type : String ,
    required : true
   },
   email : {
    type : String ,
    required : false
   },
},
{
    timestamps : true
})

const banUsersModel = mongoose.models.banUser || mongoose.model('banUser' , schema)

export default banUsersModel;