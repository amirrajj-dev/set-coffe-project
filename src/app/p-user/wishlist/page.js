import UserPannelLayout from "@/components/layouts/UserPannelLayout";
import connectToDb from "@/utils/db/db";
import usersModel from "@/utils/db/models/user";
import wishlistModel from "@/utils/db/models/wishlist";
import { decodeToken } from "@/utils/validations/auth";
import dynamic from "next/dynamic";
import { cookies } from "next/headers";
import React from "react";

const WishlistProduct = dynamic(()=>import('@/components/modules/WishlistProduct/WishlistProduct') , {
  loading : ()=>{
    return <div>Loading...</div>
  }
})

async function WishList() {
  connectToDb();
  const token = cookies().get("token").value;
  const tokenPayload = decodeToken(token);
  const user = await usersModel.findOne({ name: tokenPayload.name });
  
  const wishlist = await wishlistModel
    .find({ user: user._id }, "-__v")
    .populate("product", "title score price");
    
    
  return (
    <UserPannelLayout>
      <div className="m-20">
        <h1 className="relative text-slate-950 text-3xl font-Shabnam-medium before:content-[''] before:absolute before:top-1/2 before:right-44  before:w-4/5 before:border-t-2 before:border-slate-900 after:content-[''] after:absolute after:top-1/2 after:-right-[340px] after:w-1/3 after:border-t-2 after:border-slate-900">
          علاقه مندی ها
        </h1>
       {wishlist.length > 0 ? (
        <div className="grid grid-cols-4 gap-4">
          {wishlist.map((item, index) =>(
            <WishlistProduct key={item._id} score={item.product.score} price={item.product.price} title={item.product.title} id={JSON.parse(JSON.stringify(item._id))} />
          ))}
        </div>
       ) : (
        <h3 className="text-slate-950 text-3xl mt-12">محصولی در علاقه مندی های شما وجود ندارد :(</h3>
       )}
      </div>
    </UserPannelLayout>
  );
}

export default WishList;
