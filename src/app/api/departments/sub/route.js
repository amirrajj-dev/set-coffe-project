import connectToDb from "@/utils/db/db"
import subDepartmentModel from "@/utils/db/models/subDepartment"

export const POST = async (req)=>{
    try {
        connectToDb()
        const body = await req.json()
        const {title , department} = body
        if (title && department){
            await subDepartmentModel.create({title , department})
            return Response.json({message : 'sub department added succesfully :)'} , {
                status : 201
            })

        }
    } catch (error) {
        return Response.json({message : `error adding sub department => ${error}`} , {
            status : 500
        })
    }
}