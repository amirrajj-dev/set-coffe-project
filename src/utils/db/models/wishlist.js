const mongoose = require('mongoose')
import usersModel from './user'
import productsModel from './product'
const schema = mongoose.Schema({
    user : {
        type : mongoose.Types.ObjectId ,
        required : true,
        ref : 'user'
    },
    product : {
        type : mongoose.Types.ObjectId ,
        required : true ,
        ref : 'product'
    }
},
{
    timestamps : true
})


const wishlistModel = mongoose.models.wishlist || mongoose.model('wishlist' , schema)

export default wishlistModel;