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

function BlogsTable({ products , blogs }) {
  const mySwal = withReactContent(Swal);

  const handleEditBlog = (blog) => {
    mySwal
      .fire({
        title:
          "<h2 class='text-xl font-semibold text-amber-950 mb-4'>ویرایش مقاله</h2>",
        html: (
          <div className="flex flex-col gap-y-4 w-full">
            <div className="flex items-center justify-between gap-x-2">
              <label
                htmlFor="title"
                className="text-amber-950 font-medium text-nowrap"
              >
                نام مقاله:
              </label>
              <input
                type="text"
                id="title"
                className="w-full bg-brown-50 border border-brown-300 rounded-lg shadow-sm text-amber-950 h-10 px-3 focus:ring focus:ring-opacity-50 focus:ring-brown-500 outline-none transition"
                defaultValue={blog.title}
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
                defaultValue={blog.shortDesc}
              />
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
          const shortDesc = document.getElementById("shortDesc").value;
          return {
            title,
            shortDesc,
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
            <th className="p-4">عنوان</th>
            <th className="p-4">ویرایش</th>
            <th className="p-4">حذف</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog, index) => (
            <tr
              key={blog._id}
              className="border-t border-amber-600 hover:bg-amber-700"
            >
              <td className="p-4">{index + 1}</td>
              <td className="p-4">{blog.title}</td>
              <td className="p-4">
                <button
                  className="bg-blue-500 text-sm rounded-lg py-2 px-4 text-white hover:bg-slate-400"
                  onClick={()=>handleEditBlog(blog)}
                >
                  <MdEdit />
                </button>
              </td>
              <td className="p-4">
                <button
                  className="bg-red-500 text-sm rounded-lg py-2 px-4 text-white hover:bg-slate-400"
                  
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

export default React.memo(BlogsTable);