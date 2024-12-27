"use client";
import React, { useEffect, useRef, useState } from "react";
import BasketProduct from "@/components/templates/BasketProduct/BasketProduct";
import { IoCloseOutline } from "react-icons/io5";
import Link from "next/link";

function Basket({ onClose, isBasketOpen }) {
  const innerDivRef = useRef();
  const [products , setProducts] = useState(null)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (innerDivRef.current && !innerDivRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  useEffect(()=>{
    const getProducts = ()=>{
      const basket = JSON.parse(localStorage.getItem("basket"));
      setProducts(basket)
      
    }
    getProducts();
  } , [isBasketOpen])

  const totalPrice = products?.reduce((prev , cur)=>{
    return prev + (cur.price * cur.amount)
} , 0)

const deleteProduct = (productId)=>{
  const updatedBasket = products?.filter(product=>product.id !== productId)
  localStorage.setItem("basket", JSON.stringify(updatedBasket))
  setProducts(updatedBasket)
}
  
  return (
    <div
      className={`fixed inset-0 bg-black/85 w-screen h-screen z-[60] ${
        isBasketOpen ? "visible" : "invisible"
      }`}
    >
      <div
        ref={innerDivRef}
        className={`fixed w-[340px] flex flex-col justify-between bg-white shadow-xl transition-all duration-300 ease-in-out top-0 bottom-0 left-0 transform ${
          isBasketOpen
            ? "translate-x-0 opacity-100"
            : "-translate-x-full opacity-0"
        }`}
      >
        <div className="flex flex-col">
          <div className="flex items-center justify-between border-b border-gray-300 p-4">
            <h2 className="font-Shabnam-bold text-lg text-slate-800">
              سبد خرید
            </h2>
            <div
              onClick={onClose}
              className="flex items-center justify-center gap-x-1 font-Shabnam-medium text-base cursor-pointer hover:text-gray-600"
            >
              <IoCloseOutline className="text-xl translate-y-px" />
              <span>بستن</span>
            </div>
          </div>
          <div className="flex flex-col gap-y-2 mt-6 max-h-[500px] overflow-auto">
            {products?.length > 0 ? (
              products.map((product , index)=>(
                <BasketProduct key={index + 1}  deleteProduct={deleteProduct} {...product}/>
              ))
            ) : (
              <div className="flex flex-col items-center justify-center gap-y-4 mt-28">
                <h4 className="font-Shabnam-bold text-sm">هیچ محصولی در سبد خرید نیست</h4>
                <Link href={'/'} className="bg-emerald-600 flex items-center justify-center font-Shabnam-medium text-sm text-white border-b-2 border-emerald-900 w-2/5 h-10">بازگشت به فروشگاه</Link>
              </div>
            )}
          </div>
        </div>
        <div className="border-t border-gray-300 py-4">
          <div className="flex items-center justify-between font-Shabnam-medium text-xl px-2">
            <h3>جمع جزء : </h3>
            <span>{totalPrice?.toLocaleString()} تومان</span>
          </div>
          <div className="flex items-center justify-center my-4">
            <Link
              href={"/cart"}
              onClick={onClose}
              className="text-slate-900 text-sm font-Shabnam-bold"
            >
              مشاهده سبد خرید
            </Link>
          </div>
          <div className="flex items-center justify-center">
            <button className="bg-emerald-600 flex items-center justify-center font-Shabnam-medium text-sm text-white border-b-2 border-emerald-900 w-11/12 h-11 transition-colors hover:bg-amber-950">
              تسویه حساب
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Basket;
