import connectToDb from "@/utils/db/db";
import discountsModel from "@/utils/db/models/discount";
import productsModel from "@/utils/db/models/product";
import { isValidObjectId } from "mongoose";

export const POST = async (req) => {
  try {
    const admin = await authAdmin()
    if (!admin) {
        return Response.json({message : 'unauthorized access'} , {
            status : 401
        })
    }
    connectToDb();
    const body = await req.json();
    const { discountId } = body;
    
    if (!isValidObjectId(discountId)) {
      return Response.json(
        { message: "Invalid discountId" },
        { status: 400 }
      );
    }

    const mainDiscount = await discountsModel.findOne({ _id: discountId });
    if (!mainDiscount) {
      return Response.json(
        { message: "Discount not found" },
        { status: 404 }
      );
    }
    
    if (mainDiscount.productId) {
      await productsModel.findOneAndUpdate(
        { _id: mainDiscount.productId },
        { $set: { discountId: mainDiscount._id } }
      );
      return Response.json(
        { message: "Discount applied to the corresponding product successfully :)" },
        { status: 200 }
      );
    } else {
      await productsModel.updateMany(
        {},
        { $set: { discountId: mainDiscount._id } }
      );
      return Response.json(
        { message: "Discount applied to all products successfully :)" },
        { status: 200 }
      );
    }
  } catch (error) {
    return Response.json(
      { message: `Internal server error applying discount => ${error}` },
      { status: 500 }
    );
  }
};