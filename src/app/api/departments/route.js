import connectToDb from "@/utils/db/db"
import departmentModel from "@/utils/db/models/department"

export const POST = async (req)=>{
    try {
        connectToDb()
        const body = await req.json()
        const {title} = body
        if (title){
            await departmentModel.create({title})
            return Response.json({message : 'department added succesfully :)'} , {
                status : 201
            })

        }
    } catch (error) {
        return Response.json({message : `error adding department => ${error}`} , {
            status : 500
        })
    }
}

export const GET = async ()=>{
    try {
        connectToDb()
        const departments = await departmentModel.find({} , 'title')
        return Response.json(departments)
    } catch (error) {
        return Response.json({message : `error getting departments => ${error}`} , {
            status : 500
        })
    }
}