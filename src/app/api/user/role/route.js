import connectToDb from "@/utils/db/db"
import usersModel from "@/utils/db/models/user"

export const PUT = async (req)=>{
    try {
        connectToDb()
        const body = await req.json()
        const {id} = body
        await usersModel.findOneAndUpdate({_id : id} , {
            $set : {
                role : 'admin'
            }
        })

        return Response.json({message : 'user role updated to admin succesfully :)'} , {
            status : 200
        })

    } catch (error) {
        return Response.json({message : `error changing role to admin => ${error}`})
    }
}