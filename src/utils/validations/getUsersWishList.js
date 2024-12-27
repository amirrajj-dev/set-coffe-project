'use server'
import { cookies } from "next/headers";
import connectToDb from "../db/db";
import usersModel from "../db/models/user";
import wishlistModel from "../db/models/wishlist";
import { decodeToken } from "./auth";

const getUsersWishList = async () => {
  connectToDb();
  const token = cookies().get("token")?.value;
  const decodedToken = decodeToken(token);
  const mainUser = await usersModel.findOne({ name: decodedToken.name });
  const usersWishList = await wishlistModel
    .find({ user: mainUser?._id }, "-user -createdAt -updatedAt -__v")
    .populate("product", "title price score image");
  return JSON.parse(JSON.stringify(usersWishList));
};

export {getUsersWishList}