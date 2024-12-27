import connectToDb from "@/utils/db/db";
import commentsModel from "@/utils/db/models/comment";
import { authAdmin, authUser } from "@/utils/validations/auth";

export const POST = async (req)=>{
    try {
        const admin = await authAdmin()
        if (!admin) {
            return Response.json({message : 'unauthorized access'} , {
                status : 401
            })
        }
        connectToDb()
        const body = await req.json()
        const user = await authUser()
        const {answer , id} = body;
        const comment = await commentsModel.findOne({_id : id})
        await commentsModel.create({
            body : answer ,
            name : user.username || user.name ,
            email : user.email || null ,
            productId : comment.productId ,
            isAccept : true,
            adminAnswer : comment._id

        })
        await commentsModel.findOneAndUpdate({_id : id} , {
            $set : {
                isAccept : true
            }
        })
        return Response.json({message : 'comment answered succesfully :)'} , {
            status : 200
        })
    } catch (error) {
        
        return Response.json({message : `error answering comment => ${error}`} , {
        status : 500
        })
    }

}