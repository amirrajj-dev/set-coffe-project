import connectToDb from "@/utils/db/db"
import ticketsModel from "@/utils/db/models/ticket"

export const DELETE = async (req , {params})=>{
    try {
        connectToDb()
        const ticketId = params.id
        
        await ticketsModel.findOneAndDelete({_id : ticketId})
        return Response.json({message : 'ticket deleted succesfully :)'})
    } catch (error) {
        return Response.json({message : `error deleting ticket => ${error}`} , {
            status : 500
        })
    }
}