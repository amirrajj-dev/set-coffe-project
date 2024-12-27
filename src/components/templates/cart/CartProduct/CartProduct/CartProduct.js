import { useCart } from "@/utils/validations/CartContext";
import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
function CartProduct({ title, id,img , scoreYouGet, price, fever, amount }) {
  const {updateCart} = useCart()
  const deleteProduct = (productId) => {
    const products = JSON.parse(localStorage.getItem("basket"));
    const updatedBasket = products?.filter(
      (product) => product.id !== productId
    );
    updateCart(updatedBasket)
  };

  return (
    <div className="shadow">
      <div className="flex items-center gap-x-8 p-4">
        <div onClick={() => deleteProduct(id)} className="cursor-pointer">
          <IoCloseOutline />
        </div>
        <div className="">
          <img
            src={`/products/${img}`}
            alt="coffe pic"
            className="w-16"
          />
        </div>
        <div className="flex flex-col gap-y-1 text-sm max-w-56">
          <h3 className="">{title}</h3>
          <div>
            <span className="font-Shabnam-medium text-slate-900">
              میزان بو :{" "}
            </span>
            <span className="font-shabnam-light text-xs">{fever}</span>
          </div>
          <div>
            <span className="font-Shabnam-medium text-slate-900">
              امتیاز :{" "}
            </span>
            <span className="font-shabnam-light text-xs">{scoreYouGet}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartProduct;
