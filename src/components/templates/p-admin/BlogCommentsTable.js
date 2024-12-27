"use client";
import React from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { MdOutlineClose } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";
import { GrValidate } from "react-icons/gr";
import { FaEye } from "react-icons/fa";
import { FaBan } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { FaReply } from "react-icons/fa6";

function BlogCommentsTable({ comments }) {
  const mySwal = withReactContent(Swal);



  const acceptComment = async (commentId) => {
    const isSure = confirm("آیا از تایید کامنت اطمینان دارید ؟");
    if (isSure) {
      const response = await fetch(`/api/comments/${commentId}`, {
        method: "PUT",
      });
      if (response.status === 200) {
        toast.success("کامنت مورد نظر با موفقیت پذیرفته شد", {
          autoClose: 3000,
          position: "top-left",
        });
      }
    }
  };

  const deleteComment = async (commentId) => {
    const isSure = confirm("آیا از حذف کامنت اطمینان دارید ؟");
    if (isSure) {
      const response = await fetch(`/api/comments/${commentId}`, {
        method: "DELETE",
      });

      if (response.status === 200) {
        toast.info("کامنت با موفقیت حذف شد :)", {
          position: "top-left",
          autoClose: 3000,
        });
      }
    }
  };

  const banUser = async (email) => {
    const isSure = confirm("آیا از بن کاربر اطمینان دارید ؟");
    if (isSure) {
      const response = await fetch("/api/user/ban", {
        method: "POST",
        headers: {
          "Content-Type": "applicaation/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.status === 201) {
        toast.success("فرد مورد نظر با موفقیت بن شد :)", {
          position: "top-left",
          autoClose: 3000,
        });
      }
    }
  };

  return (
    <div className="mt-12 mx-auto max-w-[1100px] overflow-auto rounded-lg">
      <table className="bg-amber-950 rounded-lg shadow-lg text-center text-white text-sm overflow-hidden">
        <thead className="bg-amber-800 text-nowrap">
          <tr>
            <th className="p-4">کاربر</th>
            <th className="p-4">ایمیل</th>
            <th className="p-4">تاریخ ثبت</th>
            <th className="p-4">نام مقاله</th>
            <th className="p-4">مشاهده کامنت</th>
            <th className="p-4">حذف</th>
            <th className="p-4">بن</th>
            <th className="p-4">تایید کامنت</th>
            <th className="p-4">وضعیت پاسخ</th>
          </tr>
        </thead>
        <tbody>
          {comments.map((comment) => (
            <tr
              key={comment._id}
              className="border-t border-amber-600 hover:bg-amber-700"
            >
              <td className="p-4">{comment.name}</td>
              <td className="p-4">
                {comment.email ? comment.email : "ایمیلی یافت نشد"}
              </td>
              
              <td className="p-4">
                {new Date(comment.date).toLocaleDateString("fa-IR")}
              </td>
              <td className="p-4">
                <button
                  className="bg-emerald-500 text-sm rounded-lg py-2 px-4 text-white hover:bg-slate-400"
                  onClick={() =>
                    Swal.fire({
                      title: comment.blogId.title,
                      icon: "info",
                      iconColor: "#fff",
                      background: "#92400e",
                      color: "#fff",
                    })
                  }
                >
                  <FaEye />
                </button>
              </td>
              <td className="p-4">
                <button
                  className="bg-blue-500 text-sm rounded-lg py-2 px-4 text-white hover:bg-slate-400"
                  onClick={() =>
                    Swal.fire({
                      title: comment.body,
                      icon: "info",
                      iconColor: "#fff",
                      background: "#92400e",
                      color: "#fff",
                    })
                  }
                >
                  <FaEye />
                </button>
              </td>
              <td className="p-4">
                <button className="bg-red-500 text-sm rounded-lg py-2 px-4 text-white hover:bg-slate-400" onClick={()=>deleteComment(comment._id)}>
                  <FaTrash />
                </button>
              </td>
              <td className="p-4">
                <button
                  className="bg-red-900 text-sm rounded-lg py-2 px-4 text-white hover:bg-slate-400"
                  onClick={() => banUser(comment.email)}
                >
                  <FaBan />
                </button>
              </td>
              <td className="p-4">
                <button className={`bg-gradient-to-tr from-blue-600 via-emerald-600 to-violet-700 ${comment.isAccept ? 'opacity-50' : null} text-sm rounded-lg py-2 px-4 text-white hover:bg-slate-400`} disabled={comment.isAccept} onClick={() => acceptComment(comment._id)}>
                  <GrValidate />
                </button>
              </td>
              <td className="p-4 flex items-center justify-center translate-y-3 text-xl">
                {comment.isAccept ? (
                  <FaCheck className="text-green-600" />
                ) : (
                  <MdOutlineClose className="text-red-600" />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default React.memo(BlogCommentsTable);