"use client";
import React from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

function UsersTable({ users }) {
  const changeRoleHandeler = async (userId) => {
    const isSure = confirm("آیا از تغیر نقش  اطمینان دارید ؟");
    if (isSure) {
      const response = await fetch("/api/user/role", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: userId }),
      });

      if (response.status === 200) {
        toast.success("تغیر نقش موفقیت آمیز :)", {
          position: "top-left",
          autoClose: 3000,
        });
      }
    }
  };

  const deleteUser = async (userId) => {
    const isSure = confirm("آیا از حذف کاربر  اطمینان دارید ؟");
    if (isSure){
      const response = await fetch(`/api/user/${userId}` , {
        method : 'DELETE'
      })

      if (response.status === 200){
        toast.info("کاربر با موفقیت حذف شد :)", {
          position: "top-left",
          autoClose: 3000,
        });
      }
    }
  };

  const banUser = async (phone)=>{
    const isSure = confirm("آیا از بن کاربر اطمینان دارید ؟");
    if (isSure){
      const response = await fetch('/api/user/ban' , {
        method : 'POST',
        headers : {
          'Content-Type' : 'applicaation/json'
        },
        body : JSON.stringify({phone})
      })
      
      if (response.status === 201){
        toast.success("فرد مورد نظر با موفقیت بن شد :)", {
          position: "top-left",
          autoClose: 3000,
        });
      }
    }
  }

  return (
    <table className="mt-12 w-4/5 mx-auto bg-amber-950 rounded-lg overflow-hidden shadow-lg text-center text-white">
      <thead className="bg-amber-800 text-nowrap">
        <tr>
          <th className="p-4">شناسه</th>
          <th className="p-4">نام و نام خانوادگی</th>
          <th className="p-4">ایمیل</th>
          <th className="p-4">نقش</th>
          <th className="p-4">ویرایش</th>
          <th className="p-4">تغیر نقش</th>
          <th className="p-4">حذف</th>
          <th className="p-4">بن</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr
            key={user._id}
            className="border-t border-amber-600 hover:bg-amber-700"
          >
            <td className="p-4">{index + 1}</td>
            <td className="p-4">{user.name}</td>
            <td className="p-4">
              {user.email ? user.email : "ایمیلی یافت نشد"}
            </td>
            <td className="p-4">کاربر</td>
            <td className="p-4">
              <button className="bg-blue-500 text-sm rounded-lg py-2 px-4 text-white hover:bg-slate-400">
                ویرایش
              </button>
            </td>
            <td className="p-4">
              <button
                onClick={() => changeRoleHandeler(user._id)}
                className="bg-purple-600 text-sm rounded-lg py-2 px-4 text-white hover:bg-slate-400"
              >
                تغیر نقش
              </button>
            </td>
            <td className="p-4">
              <button
                className="bg-red-600 text-sm rounded-lg py-2 px-4 text-white hover:bg-slate-400"
                onClick={() => deleteUser(user._id)}
              >
                حذف
              </button>
            </td>
            <td className="p-4">
              <button className="bg-red-900 text-sm rounded-lg py-2 px-4 text-white hover:bg-slate-400" onClick={()=>banUser(user.phone)}>
                بن
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default React.memo(UsersTable)