"use client";
import React, { useEffect, useState } from "react";
import TableData from "./TableData";
import { useCart } from "@/utils/validations/CartContext"; // Ensure the correct path
import { toast } from "react-toastify";
import Link from "next/link";

function CartTable({ discounts }) {
  const { cart , updateCart } = useCart();
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('basket')) || [];
    updateCart(storedCart)
  }, []);
  const [discountInputValue, setDiscountInputValue] = useState("");
  const handleApplyDiscount = async () => {
    if (discountInputValue.trim() !== "") {
      const isDiscountAvailable = discounts.some(
        (discount) => discount.code === discountInputValue
      );
      if (isDiscountAvailable) {
        const discount = discounts.find(
          (discount) => discount.code === discountInputValue
        );

        if (discount.maxUsage > discount.usage) {
          if (discount.productId === undefined) {
            const products = JSON.parse(localStorage.getItem("basket"));
            const isUsedDiscount = products.some(
              (product) => product?.code !== discountInputValue
            );
            if (!isUsedDiscount) {
              toast.info("کد تخفیف وارد شده استفاده شده است", {
                autoClose: 3000,
                position: "top-left",
              });
              return;
            }
            const updatedProducts = products.map((product) => {
              return {
                ...product,
                oldPrice: product.price,
                code: discount.code,
                price: product.price * (Number(discount.percent) / 100),
              };
            });
            localStorage.setItem("basket", JSON.stringify(updatedProducts));
            toast.success("کد تخفیف با موفقیت اعمال شد", {
              autoClose: 3000,
              position: "top-left",
            });
            updateCart(updatedProducts)
          } else {
            const product = cart.find((product) => product.id === discount.productId);
            const updatedProduct = {
             ...product,
              oldPrice: product.price,
              code: discount.code,
              price: product.price * (Number(discount.percent) / 100),
            };
            const updatedCart = cart.map((item) =>
              item.id === updatedProduct.id? updatedProduct : item
            );
            toast.success("کد تخفیف با موفقیت اعمال شد", {
              autoClose: 3000,
              position: "top-left",
            });
            updateCart(updatedCart)
          }
        } else {
          toast.error("تخفیف وارد شده برای این محصول به اتمام رسیده است", {
            autoClose: 3000,
            position: "top-left",
          });
        }
      } else {
        toast.error("کد تخفیف وارد شده صحیح نمی باشد", {
          autoClose: 3000,
          position: "top-left",
        });
      }
    }
  };

  return (
    <>
      {cart.length > 0 ? (
        <>
          <table className="my-8">
            <thead>
              <tr className="text-lg">
                <th className="px-6 py-2">محصول</th>
                <th className="px-6 py-2">قیمت</th>
                <th className="px-6 py-2">تعداد</th>
                <th className="px-6 py-2">جمع جزء</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((product) => (
                <TableData key={product.id} product={product} />
              ))}
            </tbody>
          </table>
          <div className="flex  gap-x-2 mb-12">
            <input
              type="text"
              className="w-64 h-10 px-2 outline-none border border-gray-300"
              placeholder="کد تخفیف"
              value={discountInputValue}
              onChange={(e) => setDiscountInputValue(e.target.value)}
            />
            <button
              className="bg-emerald-600 border-b border-emerald-800 shadow font-Shabnam-medium text-sm text-white flex items-center justify-center w-32 h-10"
              onClick={handleApplyDiscount}
            >
              اعمال کد تخفیف
            </button>
          </div>
        </>
      ) : (
        <div className="flex flex-col gap-y-3 items-center justify-center mt-12">
          <h2 className="font-Shabnam-medium">
            محصولی در سبد خرید شما وجود ندارد
          </h2>
          <Link
            href={"/"}
            className="bg-emerald-700 text-white shadow w-60 h-10 flex items-center justify-center"
          >
            رفتن به فروشگاه
          </Link>
        </div>
      )}
    </>
  );
}

export default CartTable;
