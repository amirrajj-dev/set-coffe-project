import connectToDb from "@/utils/db/db"
import otpModel from "@/utils/db/models/otp"
import usersModel from "@/utils/db/models/user"
import { generateToken } from "@/utils/validations/auth"
import { cookies } from "next/headers"

export const POST = async (req)=>{
    try {
        connectToDb()
        const body = await req.json()
        const {code , phone , name} = body
        
        if (!code){
            return Response.json({message : 'code not found'} , {
                status : 404
            })
        }
        const userOtp = await otpModel.findOne({code , phone})
        if (!userOtp){
            return Response.json({message : 'invalid code'} , {
              status : 409  
            })
        }

        if (userOtp.expTime < Date.now()){
            return Response.json({message : 'code expired'} , {
                status : 401
            })
        }
        const email = `${phone}@gmail.com`
        await usersModel.create({
            email : email || 'newUser@gmail.com' ,
            phone ,
            name : name || 'newUser'
        })
        const Cookies = cookies()
        const token = await generateToken({name})
        Cookies.set('token', token, {
            expires: new Date(Date.now() + 60 * 60 * 1000), // 1 hour
            path: '/',
            secure : true,
            httpOnly : true
        })

        return Response.json({message : 'code verified successfully'} , {
            status : 200
        })
        
    } catch (error) {
        return Response.json({message : `code vertification failed => ${error}`} , {
            status : 500
        })
    }
}