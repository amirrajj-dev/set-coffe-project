'use client'
import { useRouter } from "next/navigation";
import React from "react";
import { FaTimes } from "react-icons/fa";
import { toast } from "react-toastify";

function DeleteButton({id}) {
    const router = useRouter()
    const deleteProduct = async (id)=>{
        
        const response = await fetch(`/api/products/wishlist/${id}` , {
            method : 'DELETE'
        })

        if (response.status === 200){
            toast.success('محصول مورد نظر با موفقیت از علاقه مندی های شما حذف شد' , {
                position : 'top-left',
                autoClose : 3000,
            })
            router.refresh()
        }
    }
  return (
    <button
      onClick={() => deleteProduct(id)}
      className="absolute top-2 left-2 text-gray-600 hover:text-gray-900 transition-colors"
    >
      <FaTimes />
    </button>
  );
}

export default DeleteButton;
