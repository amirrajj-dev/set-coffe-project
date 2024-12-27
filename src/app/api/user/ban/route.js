import connectToDb from "@/utils/db/db";
import banUsersModel from "@/utils/db/models/banuser";
import usersModel from "@/utils/db/models/user";

export const POST = async (req) => {
  try {
    connectToDb();
    const body = await req.json();
    const { phone , email } = body;
    const user = await usersModel.findOne({ 
      $or : [
        { phone },
        { email: email }
      ]
     });
    if (!user){
      return Response.json({message : 'no user with this phone found in database'} , {
        status : 404
      })
    }
    await banUsersModel.create({ phone: user.phone , email : user.email  ? user.email : null });
    return Response.json(
      { message: "user banned succesfully :)" },
      {
        status: 201,
      }
    );
  } catch (error) {
    return Response.json(
      { message: `error banning user => ${error}`},
      {
        status: 500,
      }
    );
  }
};

export const GET = async ()=>{
  try {
    connectToDb()
    const banUsers = await banUsersModel.find({} , 'phone email')
    return Response.json(banUsers)
  } catch (error) {
    return Response.json({message : `error getting ban users => ${error}`} , {
      status : 500
    })
  }
}
