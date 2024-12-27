"use client";
import React from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import Tickets from "../p-user/Tickets";
import withReactContent from "sweetalert2-react-content";
import { IoMdCloseCircle } from "react-icons/io";
import { FaCircleCheck } from "react-icons/fa6";


function DiscountsTable({ tickets , discounts }) {
  const applyDiscount = async (discountId)=>{
    const isSure = confirm('آیا از اعمال کردن تخفیف مورد نظر اطمینان دارید ؟')
    if (isSure){
      const response = await fetch('/api/discounts/apply' , {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({discountId})
      })
      const result = await response.json()
      
      if (response.status === 200){
        toast.success('تخفیف با موفقیت اعمال شد :)', {
          position: 'top-left',
          autoClose: 3000,
        })
      }else{
        toast.error('خطا در اعمال تخفیف :(', {
          position: 'top-left',
          autoClose: 3000,
        })
      }
    }
  }

  const deleteDiscount = async (discountId)=>{
    const isSure = confirm('آیا از حذف این تخفیف اطمینان دارید ؟')
    if (isSure){
      const response = await fetch(`/api/discounts`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({id : discountId})
      })
      const result = await response.json()
      
      if (response.status === 200){
        toast.success('تخفیف با موفقیت حذف شد :)', {
          position: 'top-left',
          autoClose: 3000,
        })
      }else{
        toast.error('خطا در حذف تخفیف :(', {
          position: 'top-left',
          autoClose: 3000,
        })
      }
    }
  }

  return (
    <table className="mt-12 w-4/5 mx-auto bg-amber-950 rounded-lg overflow-hidden shadow-lg text-center text-white">
      <thead className="bg-amber-800 text-nowrap">
        <tr>
          <th className="p-4">شناسه</th>
          <th className="p-4">کد</th>
          <th className="p-4">درصد</th>
          <th className="p-4">حداکثر استفاده</th>
          <th className="p-4">دفعات استفاده شده</th>
          <th className="p-4">حذف</th>
          <th>اعمال</th>
          <th className="p-4">امکان استفاده</th>
        </tr>
      </thead>
      <tbody>
        {discounts?.map((discount, index) => (
          <tr
            key={discount._id}
            className="border-t border-amber-600 hover:bg-amber-700"
          >
            <td className="p-4">{index + 1}</td>
            <td className="p-4 text-nowrap">{discount.code}</td>
            <td className="p-4">{discount.percent}</td>
            <td className="p-4">{discount.maxUsage}</td>
            <td className="p-4">{discount.usage}</td>
            <td className="p-4">
              <button
                className="bg-red-500 text-sm rounded-lg py-2 px-4 text-white hover:bg-slate-400" onClick={()=>deleteDiscount(discount._id)}>حذف</button>
            </td>
            <td className="p-4">
              <button
                className="bg-blue-500 text-sm rounded-lg py-2 px-4 text-white hover:bg-slate-400" onClick={()=>applyDiscount(discount._id)}>اعمال</button>
            </td>
            <td className="p-4 flex items-center justify-center text-xl">
              {discount.maxUsage > discount.usage ? (
                <FaCircleCheck className="text-emerald-500"/>
              ) : (
                <IoMdCloseCircle className="text-red-600"/>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default React.memo(DiscountsTable);