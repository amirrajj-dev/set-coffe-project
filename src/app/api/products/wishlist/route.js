import connectToDb from "@/utils/db/db"
import usersModel from "@/utils/db/models/user"
import wishlistModel from "@/utils/db/models/wishlist"
import { authUser, decodeToken } from "@/utils/validations/auth"
import { isValidObjectId } from "mongoose"
import { cookies } from "next/headers"
export const POST = async (req)=>{
    try {
        connectToDb()
        const reqBody = await req.json()
        const {user , product} = reqBody
        if (!isValidObjectId(user) || !isValidObjectId(product)){
            return Response.json({message : 'invalid user or product id'} , {
                status : 400
            })
        }

        const wish = await wishlistModel.findOne({user , product})
        if (wish){
            return Response.json({message : 'already in your wishlist :)'} , {
                status : 403
            })
        }

        await wishlistModel.create({user , product})
        return Response.json({message : 'product added to wishlist succesfully :)'} , {
            status : 201
        })
    } catch (error) {
        return Response.json({message : 'error adding product to wishlist'} , {
            status : 500
        })
    }
}

export const GET = async ()=>{
    try {
        connectToDb()
        const user = await authUser()
        const wishlist = await wishlistModel.find({user : user._id})
        return Response.json(wishlist , {status : 200})
    } catch (error) {
        return Response.json({message : 'error fetching users wishlist'} , {
            status : 500
        })
    }
}