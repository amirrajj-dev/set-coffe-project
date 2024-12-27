import connectToDb from "@/utils/db/db"
import commentsModel from "@/utils/db/models/comment"
import { authAdmin } from "@/utils/validations/auth"
import { isValidObjectId } from "mongoose"
import { markCurrentScopeAsDynamic } from "next/dist/server/app-render/dynamic-rendering"

export const PUT = async (req , {params})=>{
    try {
        const admin = await authAdmin()
        if (!admin) {
            return Response.json({message : 'unauthorized access'} , {
                status : 401
            })
        }
        connectToDb()
        const commentId = params.id
        if (isValidObjectId(commentId)){
            await commentsModel.findOneAndUpdate({_id : commentId} , {
                $set : {
                    isAccept : true
                }
            })

            return Response.json({message : 'comment accepted succesfully :)'} , {
                status : 200
            })
        }

        return Response.json({message : 'invalid comment id :('} , {
            status : 404
        })
    } catch (error) {
        return Response.json({message : `error accepting comment +> ${error}`} , {
            status : 500
        })
    }
}

export const DELETE = async (req , {params})=>{
    try {
        connectToDb()
        const commentId = params.id
        if (isValidObjectId(commentId)){
            await commentsModel.findByIdAndDelete({_id : commentId})
            return Response.json({message : 'comment deleted succesfully :)'})
        }
    }catch{
        return Response.json({message : 'error deleting comment :('} , {
            status : 500
        })
    }
}