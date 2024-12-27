import connectToDb from "@/utils/db/db"
import discountsModel from "@/utils/db/models/discount"
import productsModel from "@/utils/db/models/product"

export const POST = async (req)=>{
    try {
        const admin = await authAdmin()
        if (!admin) {
            return Response.json({message : 'unauthorized access'} , {
                status : 401
            })
        }
        connectToDb()
        const body = await req.json()
        const {code , percent , maxUsage , productId} = body 
        if (productId === 'all'){
            await discountsModel.create({
                code ,
                percent ,
                maxUsage
            })
            return Response.json({message: 'discount created succesfully :)'} , {
                status : 201
            })
        }else{
            await discountsModel.create({
                code ,
                percent ,
                maxUsage,
                productId
            })
            return Response.json({message: 'discount created succesfully :)'} , {
                status : 201
            })
        }
    } catch (error) {
        return new Response.json({message : `error creating discount => ${error}`} , {
            status : 500
        })
    }
}

export const DELETE = async (req)=>{
    try {
        connectToDb()
        const body = await req.json()
        const { id } = body
        
        await discountsModel.findByIdAndDelete(id)
        await productsModel.updateMany({discountId : id} , {
            $set : {
                discountId : null
            }
        })
        return Response.json({message: 'discount deleted succesfully :)'} , {
            status : 200
        })
    } catch (error) {
        return new Response.json({message : `error deleting discount => ${error}`} , {
            status : 500
        })
    }
}