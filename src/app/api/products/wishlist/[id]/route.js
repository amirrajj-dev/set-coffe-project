import connectToDb from "@/utils/db/db";
import wishlistModel from "@/utils/db/models/wishlist";
import { authUser } from "@/utils/validations/auth";
import { isValidObjectId } from "mongoose";

export const DELETE = async (req , {params})=>{
    
    try {
        
        connectToDb()
        const {id} = params
        const user = await authUser()
        
        if(id){
            if (!isValidObjectId(id)){
                return Response.json({message : 'invalid wish id'} , {
                    status : 400
                })
            }
            await wishlistModel.deleteOne({product : id , user : user._id})
            return Response.json({message : 'product deleted succesfully :)'} , {
                status : 200
            })
        }
    } catch (error) {
        return Response.json({message : `error deleting product from wishlist => ${error}`} , {
            status : 500
        })
    }
}