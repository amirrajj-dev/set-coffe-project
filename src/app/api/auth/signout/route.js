import { cookies } from "next/headers"

export const POST = async ()=>{
    const Cookies = cookies()
    const token = Cookies.get('token').value
    if (!token){
        return new Response('Unauthorized', { status: 401 })
    }
    Cookies.set('token' , token , {
        httpOnly: true,
        secure: true,
        path : '/' , 
        maxAge : 0
    })

    return Response.json({message : 'logged out succesfully :)'} , {
        status : 200
    })

}