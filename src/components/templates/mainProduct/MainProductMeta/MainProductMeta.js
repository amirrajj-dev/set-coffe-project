import React from "react";
import { RiFacebookFill } from "react-icons/ri";
import { FaTelegram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

function MainProductMeta({id , tags}) {
  return (
    <>
      <div className="flex flex-col space-y-4 mt-6">
        <p className="text-gray-500 text-sm">
          <span className="text-slate-900 font-bold">شناسه محصول : </span>{" "}
          {id}
        </p>
        <p className="text-gray-500 text-sm">
          <span className="text-slate-900 font-bold">دسته : </span> Premium
          Coffee, محصولات ویژه, همه موارد
        </p>
        <p className="text-gray-500 text-sm">
          <span className="text-slate-900 font-bold">برچسب : </span> خرید قهوه،فروش قهوه،قهوه دمی, {tags.join(',')}
        </p>
        <p className="text-gray-500 text-sm flex">
          <span className="text-slate-900 font-bold">به اشتراک گذاری : </span>
          <span className="flex text-gray-500  gap-x-4 text-sm translate-y-1 mr-2">
            <RiFacebookFill className="cursor-pointer transition-colors hover:text-amber-950"/>
            <BsTwitterX className="cursor-pointer transition-colors hover:text-amber-950"/>
            <FaLinkedinIn className="cursor-pointer transition-colors hover:text-amber-950"/>
            <FaPinterest className="cursor-pointer transition-colors hover:text-amber-950"/>
            <FaTelegram className="cursor-pointer transition-colors hover:text-amber-950"/>
        </span> 
        </p>
      </div>
    </>
  );
}

export default MainProductMeta;
