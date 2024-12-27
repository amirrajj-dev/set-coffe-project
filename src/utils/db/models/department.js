const mongoose = require('mongoose')
const schema = mongoose.Schema({
    title : {
        type : String, 
        required : true 
    }
})

const departmentModel = mongoose.models.department || mongoose.model('department' , schema)

export default departmentModel;