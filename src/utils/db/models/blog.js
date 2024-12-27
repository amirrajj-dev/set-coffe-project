const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    title : {
        type : String ,
        required : true
    },
    shortDesc : {
        type : String ,
        required : true
    },
    longDesc : {
        type : String ,
        required : true
    },
    image : {
        type : String ,
        required : true
    },
    comments : {
        type : [
            {
                type : mongoose.Types.ObjectId ,
                ref : 'comment'
            }
        ]
    }
},
{
    timestamps : true
})


const blogsModel = mongoose.models.blog || mongoose.model('blog' , schema);

export default blogsModel;