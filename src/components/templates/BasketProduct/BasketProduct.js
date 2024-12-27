import React from "react";
import { IoCloseOutline } from "react-icons/io5";

function BasketProduct({title , id , scoreYouGet , img , price , fever , amount , deleteProduct}) {
  return (
    <div className="border-b border-gray-300 pb-3 shadow">
        <div className="flex items-start p-4">
      <div className="">
        <img
          src={`/products/${img}`}
          alt="coffe pic"
          className="w-32"
        />
      </div>
      <div className="flex flex-col gap-y-1 text-sm max-w-56">
        <h3 className="">{title}</h3>
        <div>
          <span className="font-Shabnam-medium text-slate-900">میزان بو : </span>
          <span className="font-shabnam-light text-xs">{fever}</span>
        </div>
        <div>
          <span className="font-Shabnam-medium text-slate-900">امتیاز : </span>
          <span className="font-shabnam-light text-xs">{scoreYouGet}</span>
        </div>
        <div>
          <span className="font-Shabnam-medium text-slate-900">{amount} *</span>
          <span className="font-Shabnam-light-digit text-base font-bold mr-1">{price.toLocaleString()} تومان</span>
        </div>
      </div>
      <div onClick={()=>deleteProduct(id)} className="cursor-pointer">
        <IoCloseOutline />
      </div>
    </div>
    </div>
  );
}

export default BasketProduct;
