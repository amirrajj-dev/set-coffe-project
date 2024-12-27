'use client'
import React from 'react'
import { FaStar } from 'react-icons/fa'
import { CiStar } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { toast } from 'react-toastify';

function WishlistProduct({title , score , price , id}) {

  const handleDeleteProductFromWishList = async (wishId)=>{
    const response = await fetch(`/api/products/wishlist/${wishId}` , {
      method : 'DELETE' ,
      headers : {
        'Content-Type' : 'application/json'
      },
    })

    const result = await response.json()
    

    if (response.status === 200){
      toast.success('محصول با موفقیت از علاقه مندی های شما حذف شد' , {
        position: "top-left",
        autoClose: 3000,
      })
    }
  }

  return (
    <>
    <div className="flex flex-col justify-center items-center gap-y-4 relative">
        <img src="https://set-coffee.com/wp-content/uploads/2022/12/setj.png" className='w-44' alt="coffe pic" />
        <h3 className='text-sm text-center'>{title}</h3>
        <div className="flex items-center gap-x-2">
           {[...Array(Math.floor(score))].map(item=><FaStar className='text-yellow-500'/>)}
           {[...Array(5 - Math.floor(score))].map(item=><CiStar className='text-yellow-500'/>)}
        </div>
        <span className='font-Shabnam-light-digit text-base text-slate-950'>{price?.toLocaleString()} تومان</span>
        <button className='bg-amber-950 flex items-center justify-center text-white w-44 h-10 rounded transition-colors hover:bg-amber-900' onClick={()=>handleDeleteProductFromWishList(id)}>حذف محصول</button>
        <button className='bg-amber-950 absolute top-2 left-2 w-8 h-8 flex items-center justify-center text-white p-1 rounded-full'><FaShoppingCart/></button>
    </div>
    </>
  )
}

export default WishlistProduct