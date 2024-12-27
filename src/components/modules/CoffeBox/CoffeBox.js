import React from "react";
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { FaRegStarHalf } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
function CoffeBox({title , price , score ,  image , _id}) {
  const fullStars = Math.floor(score)
  const halfStars = score % 1 > 0? 1 : 0;

  return (
    <div className="flex flex-col relative items-center justify-center p-2 text-black group transition-all">
      <Image
        width={220}
        height={220}
        src={`/products/${image}`}
        alt="coffe pic"
        className="transition-all group-hover:scale-110"
      />
      <Link href={`/products/${_id}`} className="max-w-48 text-sm font-normal text-center">
        {title}
      </Link>
      <div className="flex items-center text-yellow-500 mt-4 gap-x-1">
      {halfStars ? [...Array(Number(halfStars))].map(score=>(
       <FaStar className="text-yellow-500"/>
     )) : null} 
     {fullStars && [...Array(Number(fullStars))].map(score=>(
       <FaStar className="text-yellow-500"/>
     ))}

      </div>
      <span className="mt-2 font-Shabnam-light-digit font-bold">{price} تومان</span>
      <div className="invisible opacity-0 flex items-center justify-center text-white h-[230px] group-hover:visible group-hover:opacity-100 transition-all w-full absolute top-0 left-0 right-0  bg-black/55">
        <button
          className="transition-all opacity-0 invisible translate-y-10 border-2 border-white rounded flex items-center justify-center p-2 text-sm group-hover:visible group-hover:opacity-100  group-hover:translate-y-0"
        >
          افزودن به سبد خرید
        </button>
        <div className="flex flex-col gap-y-2 text-3xl absolute top-3 left-1 transition-all">
          <CiSearch className="transition-all opacity-0 invisible -translate-x-12 group-hover:visible group-hover:translate-x-0 group-hover:opacity-100" />
          <CiHeart className="transition-all opacity-0 invisible -translate-x-12 group-hover:visible group-hover:translate-x-0 group-hover:opacity-100" />
        </div>
      </div>
    </div>
  );
}

export default CoffeBox;