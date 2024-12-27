import connectToDb from "@/utils/db/db";
import subDepartmentModel from "@/utils/db/models/subDepartment";

export const GET = async (req , {params})=>{
    try {
        connectToDb()
        const {id} = params
         
        const subDepartments = await subDepartmentModel.find({department: id} , '-__v').populate('department' , '-__v')
        return Response.json(subDepartments)
    } catch (error) {
        return Response.json({message : `error getting sub departments => ${error}`} , {
            status : 500
        })
    }
}