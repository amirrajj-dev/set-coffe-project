import connectToDb from "@/utils/db/db";
import productsModel from "@/utils/db/models/product";
import {writeFile} from 'fs/promises'
import path from "path";
export const POST = async (req) => {
  
  const formData = await req.formData();
  
  const img = formData.get('image');
  
  if (!img){
    return Response.json({message: 'no img available' }, {
      status : 400
    })
  }

  try {
    const buffer = Buffer.from(await img.arrayBuffer());
    
    const fileName = Date.now() + img.name
    
    await writeFile(
      path.join(process.cwd(), "public/products/" + fileName),
      buffer
    );
    await productsModel.create({
      title : formData.get('title'),
      price :  Number(formData.get('price')),
      shortDesc : formData.get('shortDesc'),
      longDesc : formData.get('longDesc'),
      image : fileName ,
      category : formData.get('categories').trim().split(','),
      scoreYouGet : Number(formData.get('scoreYouGet')),
      weight : formData.get('weight'),
      feverAmount : formData.get('feverAmount'),
      tags : formData.get('tags').trim().split(','),
    })

    return Response.json({message : 'product added succesfully :)'} , {
      status : 201
    })

  } catch (error) {
    return Response.json({message : 'internal error: ' + error.message} , {
      status : 500
    })
  }
};


export const GET = async (req)=>{
    try {
        connectToDb()
        const products = await productsModel.find({}, '-__v').populate('comments')
        return Response.json(products , {
            status : 200
        })
    } catch (error) {
        return Response.status(500).json({ message: `Error fetching products => ${error}`} , {
            status : 500
        })
    }
}

export const PUT = async (req) => {
  try {
    connectToDb()
    const body = await req.json()
    const {id , title , shortDesc , weight , score , isAvailable , price} = body
    
    const product = await productsModel.findById(id)
    await productsModel.findOneAndUpdate({_id : id} , {
      $set : {
        title : title || product.title,
        shortDesc : shortDesc || product.shortDesc,
        scoreYouGet : score || product.scoreYouGet,
        isAvailable : isAvailable || product.isAvailable,
        price : price || product.price,
        weight : weight || product.weight,
      }
    })

    return Response.json({message : 'product updated succesfully :)'} , {
        status : 200
    })

  } catch (error) {
    return Response.json({ message: `Error updating product => ${error}` } , {
      status : 500
    });
  }
}