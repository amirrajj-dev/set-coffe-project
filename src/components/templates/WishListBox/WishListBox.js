
import React from "react";
import { FaStar, FaRegStarHalf, FaTimes } from "react-icons/fa";
import { CiHeart, CiSearch } from "react-icons/ci";
import Link from "next/link";
import Image from "next/image";
import { toast } from "react-toastify";
import wishlistModel from "@/utils/db/models/wishlist";
import connectToDb from "@/utils/db/db";
import DeleteButton from "./DeleteButton";

function WishListBox({ title, price, score, image, _id }) {
  const fullStars = Math.floor(score);
  const halfStars = score % 1 > 0 ? 1 : 0;
  // const deleteProduct = async () => {
  //   connectToDb();
  //   await wishlistModel.findOneAndDelete({ _id });
  //   toast.success("محصول با موفقیت از علاقه مندی های شما حذف شد");
  // };
  return (
    <div className="flex flex-col relative items-center justify-center p-2 text-black group transition-all">
     <DeleteButton id={_id} />
      <Image
        width={220}
        height={220}
        src={`/products/${image}`}
        alt="coffee pic"
      />
      <Link
        href={`/products/${_id}`}
        className="max-w-48 text-sm font-normal text-center"
      >
        {title}
      </Link>
      <div className="flex items-center text-yellow-500 mt-4 gap-x-1">
        {Array(fullStars)
          .fill()
          .map((_, index) => (
            <FaStar key={index} className="text-yellow-500" />
          ))}
        {halfStars > 0 && <FaRegStarHalf className="text-yellow-500" />}
      </div>
      <span className="mt-2 font-Shabnam-light-digit font-bold">
        {price} تومان
      </span>
    </div>
  );
}

export default WishListBox;
