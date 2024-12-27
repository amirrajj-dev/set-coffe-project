import BreadCrumb from "@/components/modules/BreadCrumb/BreadCrumb";
import Navbar from "@/components/modules/Navbar/Navbar";
import { FaRegHeart } from "react-icons/fa";
import React from "react";
import Footer from "@/components/modules/Footer/Footer";
import Link from "next/link";
import { decodeToken, getToken } from "@/utils/validations/auth";
import usersModel from "@/utils/db/models/user";
import connectToDb from "@/utils/db/db";
import { cookies } from "next/headers";
import { getUsersWishList } from "@/utils/validations/getUsersWishList";
import dynamic from "next/dynamic";
import { toast } from "react-toastify";
import wishlistModel from "@/utils/db/models/wishlist";
const WishListBox = dynamic(()=>import('@/components/templates/WishListBox/WishListBox') , {
  loading : ()=>(
    <div>Loading...</div>
  )
})
async function WishList() {
  connectToDb()
  const token = cookies().get('token').value
  const usersWishList = await getUsersWishList()
  const userWishlistProducts = usersWishList?.map(item=>item.product)
  
  const deleteProduct = async(productId)=>{
    await wishlistModel.findOneAndDelete({_id: productId})
    toast.success('محصول با موفقیت از لیست علاقه مندی های شما حذف شد')
  }
  return (
    <>
      <Navbar/>
      <BreadCrumb route={"علاقه مندی ها"} />
      <div className="max-w-7xl mx-auto mt-8">
        <h2 className="font-bold text-xl border-b border-gray-300 pb-2">
          محصولات مورد علاقه شما
        </h2>
        {userWishlistProducts?.length > 0 ? (
          <div className="grid grid-cols-4 my-8">
           {userWishlistProducts?.map(item=>(
            <WishListBox key={item._id} {...item}/>
           ))}
          </div>
        ) : (
          <div className="flex flex-col gap-y-4 justify-center items-center my-8">
            <FaRegHeart className="w-80 h-60 text-gray-300" />
            <h2 className="font-bold text-5xl text-slate-950">
              This WishList is Empty
            </h2>
            <p className="text-gray-500 max-w-[410px] text-center">
              شما هنوز هیچ محصولی در لیست علاقه مندی های خود ندارید. در صفحه
              "فروشگاه" محصولات جالب زیادی پیدا خواهید کرد
            </p>
            <Link
              href={"/"}
              className="bg-emerald-700 text-white rounded w-36 h-11 shadow flex items-center justify-center"
            >
              بازگشت به فروشگاه
            </Link>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default WishList;
