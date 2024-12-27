import connectToDb from "@/utils/db/db"
import usersModel from "@/utils/db/models/user"
import { authUser, generateToken } from "@/utils/validations/auth"
import { cookies } from "next/headers"

export const POST = async (req)=>{
    try {
       connectToDb()
       const refreshToken = cookies.get('refresh-token')
       if (!refreshToken){
        return Response.json({message : 'unauthorized'} , {
            status : 401
        })
       }

       const user  = await usersModel.findOne({refreshToken : refreshToken})
       if (!user){
        return Response.json({message : 'user not found'} , {
            status : 404
        })
       }

       const newAccessToken = generateToken({name : user.name})
       cookies().set('token' , newAccessToken , {
        httpOnly : true ,
        secure : true ,
        path : '/'
       })

       return Response.json({message : 'authorized successfully'}  , {
        status : 200
       })

    } catch (error) {
        return Response.json({message  : 'error finding refrsh token and verifying user'} , {
            status : 500
        })
    }
}