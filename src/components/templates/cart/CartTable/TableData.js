"use client";
import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { useCart } from "@/utils/validations/CartContext";
import CartProduct from "../CartProduct/CartProduct/CartProduct";

function TableData({ product }) {
  const [productCount, setProductCount] = useState(product.amount);
  const { cart, updateCart } = useCart();

  const handleIncreasePrice = (productId) => {
    const updatedProducts = cart.map((prod) => {
      if (prod.id === productId) {
        prod.amount += 1;
      }
      return prod;
    });
    updateCart(updatedProducts);
    setProductCount((prev) => prev + 1);
  };

  const handleDecreasePrice = (productId) => {
    const updatedProducts = cart.map((prod) => {
      if (prod.id === productId && prod.amount > 1) {
        prod.amount -= 1;
      }
      return prod;
    });
    updateCart(updatedProducts);
    setProductCount((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <tr className="border-b border-gray-300">
      <td className="px-6">
        <CartProduct {...product} />
      </td>
      <td className="px-6 text-gray-500 font-Shabnam-light-digit text-nowrap">
        {product.oldPrice ? (
          <>
            <span className="line-through opacity-60 font-bold text-black/80 ml-1">
              {product.oldPrice.toLocaleString()} تومان
            </span>
            <span className="">{product.price.toLocaleString()} تومان</span>
          </>
        ) : (
          <span>{product.price.toLocaleString()} تومان</span>
        )}
      </td>
      <td className="px-6">
        <div className="flex text-gray-500">
          <FaMinus
            className="h-10 w-7 p-2 font-bold border border-gray-300 flex text-xs items-center justify-center transition-colors hover:bg-amber-950 hover:text-white"
            onClick={() => handleDecreasePrice(product.id)}
          />
          <span className="h-10 text-sm border border-gray-300 font-Shabnam-light-digit p-2 flex items-center justify-center">
            {productCount}
          </span>
          <FaPlus
            className="h-10 w-7 p-2 font-bold border border-gray-300 text-xs flex items-center justify-center transition-colors hover:bg-amber-950 hover:text-white"
            onClick={() => handleIncreasePrice(product.id)}
          />
        </div>
      </td>
      <td className="px-6 font-Shabnam-light-digit font-bold text-lg text-nowrap">
        {(product.price * productCount).toLocaleString()} تومان
      </td>
    </tr>
  );
}

export default TableData;
