import connectToDb from "@/utils/db/db";
import productsModel from "@/utils/db/models/product";

export const GET = async (req , {params})=>{
   try {
    connectToDb()
    const {id} = params;
    const product = await productsModel.findOne({id})
    if (product){
        return Response.json(product , {
            status : 200 ,
        })
    }else{
        return Response.json({message : 'no product with this id in database :('} , {
            status : 404
        })
    }
   } catch (error) {
    return Response.json({message : `Error getting product => ${error}`} , {
        status : 500
    })
   }
}

export const DELETE = async (req , {params})=>{
    try {
        connectToDb()
        const {id} = params;
        await productsModel.findByIdAndDelete(id)
        return Response.json({message : 'product deleted succesfully :)'} , {
            status : 200
        })
    } catch (error) {
        return Response.json({message : `error deleting product => ${error}`} , {
            status : 500
        })
    }
}