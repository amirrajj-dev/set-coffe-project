"use client";
import { useRouter } from "next/navigation";
import React, { memo, useState } from "react";
import { toast } from "react-toastify";
function AddDiscountForm({ products }) {
  const [code, setCode] = useState("");
  const [percent, setPercent] = useState("");
  const [maxUsage, setMaxUsage] = useState("");
  const [productId, setProductId] = useState('-1');
  const router = useRouter()
  const addDiscount = async ()=>{
   if (code.trim() && percent.trim() && maxUsage.trim() && productId != '-1'){
    const newDisocunt = {
        code ,
        percent ,
        maxUsage ,
        productId
    } 
    const response = await fetch('/api/discounts' , {
      method : 'POST' ,
      headers : {
        'Content-Type' : 'application/json',
      },
      body : JSON.stringify(newDisocunt),
    })

    if (response.status === 201){
      setCode('')
      setMaxUsage('')
      setPercent('')
      toast.success('تخفیف با موفقیت اضافه شد :)' , {
        position: 'top-left',
        autoClose: 3000,
      })
      setTimeout(() => {
        router.refresh()
      }, 3000);
    }else{
      toast.error('خطا در اضافه کردن تخفیف. لطفا دوباره امتحان کنید.' , {
        position: 'top-left',
        autoClose: 3000,
      })
    }
    
   }else{
    toast.info('تمامی فیلد هارو پر کن زرنگعلی🍌' , {
        autoClose : 3000 ,
        position : 'top-left'
    })
   }
  }

  return (
    <div className="grid grid-cols-2 justify-center items-center gap-6 my-8">
      <div className="flex flex-col gap-y-3">
        <label htmlFor="code" className="text-xl">
          کد تخفیف
        </label>
        <input
          className="h-11 outline-none border border-amber-950 rounded px-2"
          type="email"
          id="code"
          value={code}
          onChange={e=>setCode(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-y-3">
        <label htmlFor="percent" className="text-xl">
          درصد تخفیف
        </label>
        <input
          className="h-11 outline-none border border-amber-950 rounded px-2"
          type="email"
          id="percent"
          value={percent}
          onChange={e=>setPercent(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-y-3">
        <label htmlFor="maxUsage" className="text-xl">
          حداکثر استفاده
        </label>
        <input
          className="h-11 outline-none border border-amber-950 rounded px-2"
          type="email"
          id="maxUsage"
          value={maxUsage}
          onChange={e=>setMaxUsage(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-y-3">
        <label htmlFor="product" className="text-xl">
          محصول
        </label>
        <select
          id="product"
          className="h-11 outline-none border border-amber-950 rounded px-2"
          value={productId}
          onChange={e=>setProductId(e.target.value)}
        >
          <option value={'-1'}>محصول مورد نظر را انتخاب کنید☕</option>
          <option value="all">همه</option>
          {products?.map((product) => (
            <option key={product._id} value={product._id}>{product.title}</option>
          ))}
        </select>
      </div>
        <button onClick={()=>addDiscount()} className="w-96 rounded shadow h-11 text-white text-lg col-span-full mx-auto bg-gradient-to-tr from-amber-950 via-amber-900 to-amber-800">افزودن</button>
    </div>
  );
}

export default memo(AddDiscountForm);
