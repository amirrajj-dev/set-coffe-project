import connectToDb from "@/utils/db/db"
import usersModel from "@/utils/db/models/user"
import { decodeToken } from "@/utils/validations/auth"
import { cookies } from "next/headers"
export const GET = async ()=>{
    connectToDb()
    const token = cookies().get('token').value
    if (!token){
        return Response.json({message : 'UNAUTHORIZED'} , {
            status : 401
        })
    }
    const decodedToken = decodeToken(token)
    const user = await usersModel.findOne({name : decodedToken.name} , 'name username email phone role')
    if (!user){
        return Response.json({message : 'no user found :('} , {
            status : 404
        })
    }
    
    return Response.json(user, {
        status : 200
    })
}