import connectToDb from "@/utils/db/db";
import usersModel from "@/utils/db/models/user";
import { generateRefreshToken, generateToken, hashedPassword } from "@/utils/validations/auth";
import { cookies } from "next/headers";

export const POST = async (req) => {
  try {
    await connectToDb(); // Use await to ensure DB connection is established
    const reqBody = await req.json();

    const { name, phone, email, password } = reqBody;

    const existingUser = await usersModel.findOne({
      $or: [{ phone }, { email }]
    });

    if (existingUser) {
      return new Response(JSON.stringify({ message: "User already exists" }), {
        status: 400,
      });
    }

    if (!name.trim() || !phone.trim() || !password.trim()) {
      return new Response(JSON.stringify({ message: 'name, phone, and password are required' }), {
        status: 400,
      });
    }

    const token = await generateToken({ name });
    const refreshToken = await generateRefreshToken({name})
    const newUser = {
      name,
      phone,
      email: email?.trim() ? email : null,
      password: await hashedPassword(password), // Hash the password
      refreshToken :  refreshToken
    };
    
    
    const Cookies = cookies();
    Cookies.set('token', token, {
      httpOnly: true,
      secure: true,
      maxAge: 60 * 60 * 24 , // 1 day
      path: '/'
    });

    Cookies.set('refresh-token' , refreshToken , {
      httpOnly : true , 
      secure : true,
      path : '/' ,
      maxAge : 60 * 60 * 24 * 7 // 7 days
    })
    const createdUser = await usersModel.create(newUser);
    
    return new Response(JSON.stringify({ message: 'signed up successfully :)' }), {
      status: 201,
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: `internal server error => ${error.message}` }), {
      status: 500,
    });
  }
};