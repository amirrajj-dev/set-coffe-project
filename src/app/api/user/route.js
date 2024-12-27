import connectToDb from "@/utils/db/db";
import usersModel from "@/utils/db/models/user";
import { decodeToken, hashedPassword } from "@/utils/validations/auth";
import { cookies } from "next/headers";

export const POST = async (req) => {
  try {
    await connectToDb();
    const body = await req.json();
    const { username, email, password, phone, img } = body;
    const token = cookies().get("token").value;
    const tokenPayload = decodeToken(token);
    const user = await usersModel.findOne({name : tokenPayload.name})
    const hashPassword = password ? await hashedPassword(password) : user.password
    
    await usersModel.findOneAndUpdate({name : tokenPayload.name} , {
        $set : {
            username : username || user.username,
            email : email || user.email,
            password : hashPassword || user.password,
            phone : Boolean(phone) ? phone : user.phone,
            profile: img || user.img || null
        }
    })

    return Response.json({message : 'user updated succesfully :)'} , {
        status : 200
    })

  } catch (error) {
    return Response.json({message : `error updating user => ${error}`} , {
        status : 500
    })
  }
};
