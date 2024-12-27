const mongoose = require('mongoose')
import productsModel from './product'
const schema = mongoose.Schema({
    body : {
        type : String,
        required : true
    },
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    score : {
        type : Number,
        required : false,
        min : 0,
        max : 5,
    },
    productId : {
        type : mongoose.Types.ObjectId,
        ref : 'product',
        required : false
    },
    blogId : {
        type : mongoose.Types.ObjectId,
        ref : 'blog',
        required : false
    },
    date : {
        type : Date,
        default : ()=>Date.now(),
        immutable : true,
    },
    isAccept : {
        type : Boolean,
        required : true ,
        default : false
    },
    adminAnswer : {
        type : mongoose.Types.ObjectId,
        ref : 'comment',
        required : false,
    }
})

const commentsModel = mongoose.models.comment || mongoose.model('comment' , schema)

export default commentsModel;