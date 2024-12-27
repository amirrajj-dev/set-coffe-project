import connectToDb from "@/utils/db/db"
import blogsModel from "@/utils/db/models/blog"
import {writeFile} from 'fs/promises'
import path from "path"
export const POST = async (req)=>{
    try {
        connectToDb()
        const formData = await req.formData()
        const img = formData.get('image')
        if (!img){
            return Response.json({message: 'no img available' }, {
              status : 400
            })
          }

          const buffer = Buffer.from(await img.arrayBuffer());
          const fileName = Date.now() + img.name
          const filePath = path.join(process.cwd(), 'public/blogs/' + fileName) 
          await writeFile(filePath, buffer)
          await blogsModel.create({
            title : formData.get('title'),
            shortDesc : formData.get('shortDesc'),
            longDesc : formData.get('longDesc'),
            image : fileName
          })

          return Response.json({message : 'blog added succesfully :)'} , {
            status : 201
          })

    } catch (error) {
        return Response.json({message : `error creating new blog => ${error}`} , {
            status : 500
        })
    }
}