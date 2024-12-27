import connectToDb from "@/utils/db/db";
import usersModel from "@/utils/db/models/user";
import { generateToken, isValidPassword, validateEmail, validatePhone } from "@/utils/validations/auth";
import { cookies } from "next/headers";

export const POST = async (req) => {
  try {
    await connectToDb();
    const body = await req.json();
    const { identifier, password } = body;

    const accesstoken = cookies().get("token");
    if (accesstoken) {
      return new Response(
        JSON.stringify({ message: "You are already logged in" }),
        { status: 200 }
      );
    }

    const isEmail = validateEmail(identifier);
    const isPhone = validatePhone(identifier);
    if (!isEmail && !isPhone) {
      return new Response(JSON.stringify({ message: 'Invalid email or phone number' }), { status: 401 });
    }
    
    const user = await usersModel.findOne(isEmail ? { email: identifier } : { phone: identifier });
    if (!user) {
      return new Response(JSON.stringify({ message: "User not found" }), { status: 404 });
    }

    const isPasswordCorrect = await isValidPassword(password, user.password);
    if (!isPasswordCorrect) {
      return new Response(JSON.stringify({ message: "Invalid password" }), { status: 401 });
    }

    const newAccesstoken = await generateToken({ name: user.name });
    const newRefreshtoken = await generateToken({ name: user.name });
    await usersModel.findOneAndUpdate({
        phone : user.phone
    } , {
        $set : {
            refreshToken  : newRefreshtoken
        }
    })
    
    const Cookies = cookies();
    Cookies.set("token", newAccesstoken, {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: "/",
      secure: true,
    });

    return new Response(
      JSON.stringify({ message: "Signed in successfully :)" }),
      { status: 200 }
    );

  } catch (error) {
    
    return new Response(
      JSON.stringify({ message: `Internal server error => ${error}` }),
      { status: 500 }
    );
  }
};