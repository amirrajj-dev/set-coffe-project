import connectToDb from "@/utils/db/db"
import usersModel from "@/utils/db/models/user"

export const DELETE = async (req , {params})=>{
    try {
        connectToDb()
        const userId = params.id
        await usersModel.findOneAndDelete({_id : userId})
        return Response.json({message : 'user delete succesfully :)'} , {
            status : 200
        })
    } catch (error) {
        return Response.json({message : `error deleting user => ${error}`})
    }
}