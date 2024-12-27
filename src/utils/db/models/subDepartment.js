import departmentModel from './department';
const mongoose = require('mongoose')
const schema = mongoose.Schema({
    title : {
        type : String ,
        required : true
    },
    department : {
        type : mongoose.Types.ObjectId ,
        ref : 'department'
    }
})

const subDepartmentModel = mongoose.models.subDepartment || mongoose.model('subDepartment' , schema)

export default subDepartmentModel;