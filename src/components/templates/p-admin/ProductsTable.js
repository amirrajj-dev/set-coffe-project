"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import Tickets from "../p-user/Tickets";
import withReactContent from "sweetalert2-react-content";
import { MdOutlineClose } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";
import { GrValidate } from "react-icons/gr";
import { FaEye } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { FaBan } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { FaReply } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";

function ProductsTable({ products }) {
  const mySwal = withReactContent(Swal);
  const [allProducts , setAllProducts] = useState(products)
  const handleShowProductDetails = (product) => {
    mySwal.fire({
      title:
        "<h2 class='text-lg font-semibold text-gray-900 mb-4'>جزئیات محصول</h2>",
      html: (
        <div className="flex flex-col items-start gap-y-4">
          <div className="flex items-center justify-between w-full border-b pb-2">
            <span className="text-gray-700 font-medium">
              امتیاز دریافتی پس از خرید محصول:
            </span>
            <span className="text-gray-900 font-semibold">
              {product.scoreYouGet}
            </span>
          </div>
          <div className="flex items-center justify-between w-full border-b pb-2">
            <span className="text-gray-700 font-medium">وزن:</span>
            <span className="text-gray-900 font-semibold">
              {product.weight}
            </span>
          </div>
          <div className="flex items-center justify-between w-full border-b pb-2">
            <span className="text-gray-700 font-medium">تعداد کامنت ها:</span>
            <span className="text-gray-900 font-semibold">
              {product.comments.length}
            </span>
          </div>
          <div className="flex items-center justify-between w-full border-b pb-2">
            <span className="text-gray-700 font-medium">میزان بو:</span>
            <span className="text-gray-900 font-semibold">
              {product.feverAmount}
            </span>
          </div>
        </div>
      ),
      showCloseButton: true,
      focusConfirm: false,
      confirmButtonText: "بستن",
      confirmButtonColor: "#008979",
    });
  };

  const handleEditProduct = (product) => {
    mySwal
      .fire({
        title:
          "<h2 class='text-xl font-semibold text-amber-950 mb-4'>ویرایش محصول</h2>",
        html: (
          <div className="flex flex-col gap-y-4 w-full">
            <div className="flex items-center justify-between gap-x-2">
              <label
                htmlFor="title"
                className="text-amber-950 font-medium text-nowrap"
              >
                نام محصول:
              </label>
              <input
                type="text"
                id="title"
                className="w-full bg-brown-50 border border-brown-300 rounded-lg shadow-sm text-amber-950 h-10 px-3 focus:ring focus:ring-opacity-50 focus:ring-brown-500 outline-none transition"
                defaultValue={product.title}
              />
            </div>
            <div className="flex items-center justify-between gap-x-2">
              <label
                htmlFor="weight"
                className="text-amber-950 font-medium text-nowrap"
              >
                وزن:
              </label>
              <input
                type="text"
                id="weight"
                className="w-full bg-brown-50 border border-brown-300 rounded-lg shadow-sm text-amber-950 h-10 px-3 focus:ring focus:ring-opacity-50 focus:ring-brown-500 outline-none transition"
                defaultValue={product.weight}
              />
            </div>
            <div className="flex items-center justify-between gap-x-2">
              <label
                htmlFor="score"
                className="text-amber-950 font-medium text-nowrap"
              >
                امتیاز:
              </label>
              <input
                type="text"
                id="score"
                className="w-full bg-brown-50 border border-brown-300 rounded-lg shadow-sm text-amber-950 h-10 px-3 focus:ring focus:ring-opacity-50 focus:ring-brown-500 outline-none transition"
                defaultValue={product.scoreYouGet}
              />
            </div>
            <div className="flex items-center justify-between gap-x-2">
              <label
                htmlFor="shortDesc"
                className="text-amber-950 font-medium text-nowrap"
              >
                توضیحات کوتاه :
              </label>
              <input
                type="text"
                id="shortDesc"
                className="w-full bg-brown-50 border border-brown-300 rounded-lg shadow-sm text-amber-950 h-10 px-3 focus:ring focus:ring-opacity-50 focus:ring-brown-500 outline-none transition"
                defaultValue={product.shortDesc}
              />
            </div>
            <div className="flex items-center justify-between gap-x-2">
              <label
                htmlFor="fever"
                className="text-amber-950 font-medium text-nowrap"
              >
                میزان بو:
              </label>
              <input
                type="text"
                id="fever"
                className="w-full bg-brown-50 border border-brown-300 rounded-lg shadow-sm text-amber-950 h-10 px-3 focus:ring focus:ring-opacity-50 focus:ring-brown-500 outline-none transition"
                defaultValue={product.feverAmount}
              />
            </div>
            <div className="flex items-center justify-between gap-x-2">
              {" "}
              <label
                htmlFor="isAvailable"
                className="text-amber-950 font-medium text-nowrap"
              >
                موجودی:
              </label>{" "}
              <select
                id="isAvailable"
                className="w-full bg-brown-50 border border-brown-300 rounded-lg shadow-sm text-brown-900 h-10 px-3 focus:ring focus:ring-opacity-50 focus:ring-brown-500 outline-none transition"
                defaultValue={product.isAvailable ? "yes" : "no"}
              >
                {" "}
                <option value="yes">بله</option> <option value="no">خیر</option>{" "}
              </select>{" "}
            </div>
          </div>
        ),
        background: "#f8a01e",
        confirmButtonColor: "#8b572a",
        showCloseButton: true,
        focusConfirm: false,
        confirmButtonText: "ذخیره تغییرات",
        preConfirm: () => {
          const title = document.getElementById("title").value;
          const weight = document.getElementById("weight").value;
          const score = document.getElementById("score").value;
          const shortDesc = document.getElementById("shortDesc").value;
          const fever = document.getElementById("fever").value;
          const isAvailable = document.getElementById("isAvailable").value;
          return {
            title,
            weight,
            score,
            shortDesc,
            fever,
            isAvailable,
          };
        },
      })
      .then(async (res) => {
        if (res.isConfirmed) {
          const updatedProduct = res.value;
          const response = await fetch(`/api/products`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({...updatedProduct , id : product._id}),
          });
          if (response.ok) {
            toast.success("محصول با موفقیت ویرایش شد!" , {
                position: "top-left",
                autoClose: 3000,
  
            });
            setAllProducts(
              products.map((product) =>
                product._id === updatedProduct._id? updatedProduct : product
              )
            );
          } else {
            toast.error("خطا در ویرایش محصول!");
          }
        }
      });
  };

  const deleteProduct = async ()=>{
    const isSure = confirm("Are you sure you want to delete this product?");
    if (isSure) {
        const response = await fetch(`/api/products/${product._id}`, {
          method: "DELETE",
        });
        if (response.ok) {
          toast.success("محصول با موفقیت حذف شد!", {
            position: "top-left",
            autoClose: 3000,
          });
          setAllProducts(products.filter((product) => product._id!== product._id));
        } else {
          toast.error("خطا در حذف محصول!");
        }
  
    }
  }

  return (
    <div className="mt-12 mx-auto max-w-[1100px] overflow-auto rounded-lg">
      <table className="bg-amber-950 rounded-lg shadow-lg text-center text-white text-sm overflow-hidden">
        <thead className="bg-amber-800 text-nowrap">
          <tr>
            <th className="p-4">شناسه</th>
            <th className="p-4">نام</th>
            <th className="p-4">قیمت</th>
            <th className="p-4">امتیاز</th>
            <th className="p-4">مشاهده جزعیات</th>
            <th className="p-4">ویرایش</th>
            <th className="p-4">حذف</th>
          </tr>
        </thead>
        <tbody>
          {allProducts.map((product, index) => (
            <tr
              key={product._id}
              className="border-t border-amber-600 hover:bg-amber-700"
            >
              <td className="p-4">{index + 1}</td>
              <td className="p-4">{product.title}</td>
              <td className="p-4">{product.price.toLocaleString()} تومان</td>
              <td className="p-4 flex items-center juce gap-x-1 translate-y-2">
                {[...Array(Math.ceil(5 - product.score))].map((score , index) => (
                  <FaStarHalfAlt key={index + 1} className="text-yellow-500" />
                ))}
                {[...Array(Math.floor(product.score))].map((score , index) => (
                  <FaStar key={index + 1} className="text-yellow-500" />
                ))}
              </td>
              <td className="p-4">
                <button
                  className="bg-emerald-500 text-sm rounded-lg py-2 px-4 text-white hover:bg-slate-400"
                  onClick={() => handleShowProductDetails(product)}
                >
                  <FaEye />
                </button>
              </td>
              <td className="p-4">
                <button
                  className="bg-blue-500 text-sm rounded-lg py-2 px-4 text-white hover:bg-slate-400"
                  onClick={() => handleEditProduct(product)}
                >
                  <MdEdit />
                </button>
              </td>
              <td className="p-4">
                <button
                  className="bg-red-500 text-sm rounded-lg py-2 px-4 text-white hover:bg-slate-400"
                  onClick={() => deleteProduct(product._id)}
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default React.memo(ProductsTable);
