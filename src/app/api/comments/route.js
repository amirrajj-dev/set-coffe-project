import connectToDb from "@/utils/db/db";
import blogsModel from "@/utils/db/models/blog";
import commentsModel from "@/utils/db/models/comment";
import productsModel from "@/utils/db/models/product";
import usersModel from "@/utils/db/models/user";
import { decodeToken } from "@/utils/validations/auth";
import { cookies } from "next/headers";
export const POST = async (req) => {
  try {
    connectToDb();
    const reqBody = await req.json();
    const { username, email, commentBody, rememberMe, rating, productId , blogId } = reqBody;
    
    
    
    const cookiesStore = cookies()
    const token = cookiesStore.get('token')?.value
    
    if (!token){
      return Response.json({message : 'UNAUTHORIZED FIRST SIGN IN BRUH :/'} , {
        status : 401
      })
    }
    
    const tokenPayload = decodeToken(token)
    const user = await usersModel.findOneAndUpdate(
      { name : tokenPayload.name }, // Ensure you use the correct field for identification
      {
        $set: {
          username,
          email,
          rememberMeInAddingNewComment: rememberMe,
        }
      },
      { new: true }
    );
    
    if (!user) {
      return new Response(
        JSON.stringify({ message: 'User not found' }),
        { status: 404 }
      );
    }

    const comment = await commentsModel.create({
      body :  commentBody,
      name : username,
      email,
      score : rating || 5,
      productId : productId || null,
      blogId : blogId || null,
      isAccept : false
    });

    if (productId){
      await productsModel.findOneAndUpdate(
       { _id: productId },
       {
         $push: {
           comments: comment._id,
         },
        }
      );
      const product = await productsModel
        .findById(productId)
        .populate("comments");
      const scores = product.comments.map((comment) => comment.score);
      const averageScore = (
        scores.reduce((prevScore, currentscore) => {
          return prevScore + currentscore;
        }, 0) / scores.length
      ).toFixed(1);
  
      product.score = averageScore;
      await product.save();
    }


    blogId && await blogsModel.findOneAndUpdate(
      { _id: blogId },
      {
        $push: {
          comments: comment._id,
        },
      }
    ); 


    return Response.json(
      { message: "Comment created successfully" },
      {
        status: 201,
      }
    );
  } catch (error) {
    return Response.json(
      { message: `Error creating comment => ${error}` },
      {
        status: 500,
      }
    );
  }
};

export const GET = async (req) => {
  try {
    connectToDb();
    const comments = await commentsModel
      .find({}, "-__v")
      .populate("productId", "-__v");
    return Response.json(comments, {
      status: 200,
    });
  } catch (error) {
    return Response.json(
      { message: `Error fetching comments => ${error}` },
      {
        status: 500,
      }
    );
  }
};
