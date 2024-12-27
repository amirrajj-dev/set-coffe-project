'use client';
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { FaStarHalfAlt } from "react-icons/fa";
import {toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { shouldShowUserDetailInAddingComment } from "@/utils/validations/auth";
function CommentBox({productId}) {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [commentBody , setCommentBody] = React.useState('')
  const [username , setUserName] = React.useState('')
  const [email , setEmail] = React.useState('')
  const [rememberMe , setRemeberMe] = React.useState(false)
  const handleSubmitComment = async ()=>{
    const comment = {
      username,
      email,
      commentBody,
      rememberMe,
      rating,
      productId
    }

    const response = await fetch('/api/comments',  {
      method : 'POST' ,
      headers : {
        'Content-Type' : 'application/json',
      },
      body : JSON.stringify(comment)
    })

    if (response.status === 201){
      toast.success('نظر شما با موفقیت ارسال شد :)' , {
        position: 'top-left',
        autoClose: 3000,
      })
    }else{
      toast.error('برای ثبت کامنت باید لاگین کنید :)' , {
        position: 'top-left',
        autoClose: 3000,
      })
    }
  }
  // show user details in commentBox just if the user rememberMeInAddingNewComment field is true
  const userDetails = async ()=>{
    const payload = await shouldShowUserDetailInAddingComment()
    if (payload?.rememberMeInAddingNewComment){
      setEmail(payload.email)
      setUserName(payload.username)
      setRemeberMe(payload.rememberMeInAddingNewComment)
    }
  }

  React.useEffect(()=>{
    userDetails()
  } , [])
  
  return (
    <>
     <div className="flex flex-col text-sm gap-y-3">
     <h2 className="text-slate-900 font-bold">دیدگاه خود را بنویسید</h2>
      <span className="text-gray-500">
        نشانی ایمیل شما منتشر نخواهد شد. بخشهای موردنیاز علامتگذاری شده اند *
      </span>
      <div className="flex  items-center gap-x-2">
        <span className="font-Shabnam-medium">امتیاز شما <span className="text-red-500">*</span> :</span>
        <div className="flex space-x-1 mt-2 -translate-y-1 mr-4">
          {[...Array(5)].map((star, index) => {
            const ratingValue = index + 1;

            return (
              <label key={index}>
                <input
                  type="radio"
                  name="rating"
                  value={ratingValue}
                  onClick={() => setRating(ratingValue)}
                  className="hidden"
                />
                <FaStar
                  className={`cursor-pointer ${ratingValue <= (hover || rating) ? "text-yellow-500" : "text-gray-300"}`}
                  size={16}
                  onMouseEnter={() => setHover(ratingValue)}
                  onMouseLeave={() => setHover(null)}
                />
              </label>
            );
          })}
        </div>
      </div>
      <label htmlFor="body" className="font-Shabnam-medium">دیدگاه شما <span className="text-red-500">*</span></label>
      <textarea id="body" className="outline-none rounded border border-gray-600 w-[550px] p-2 text-sm text-gray-600 h-44" value={commentBody} onChange={e=>setCommentBody(e.target.value)}></textarea>
      <label htmlFor="username" className="font-Shabnam-medium">نام <span className="text-red-500">*</span></label>
      <input id="username" defaultValue={username} value={username} onChange={e=>setUserName(e.target.value)} className="outline-none rounded border border-gray-600 p-2 text-sm text-gray-600" type="text" />
      <label htmlFor="email" className="font-Shabnam-medium">ایمیل <span className="text-red-500">*</span></label>
      <input id="email" value={email} onChange={e=>setEmail(e.target.value)} defaultValue={email} className="outline-none rounded border border-gray-600 p-2 text-sm text-gray-600" type="email" />
      <div className="flex items-center gap-x-2 text-slate-800">
        <input id="rememberMe" checked={rememberMe} type="checkbox" className="translate-y-1" value={rememberMe} onChange={e=>setRemeberMe(e.target.checked)} />
        <label htmlFor="rememberMe" className="translate-y-1">ذخیره نام، ایمیل و وبسایت من در مرورگر برای زمانی که دوباره دیدگاهی می‌نویسم.</label>
      </div>
      <button className="bg-emerald-700 text-white w-16 my-4 h-10 flex items-center justify-center rounded transition-colors border-b border-emerald-900 shadow-md hover:bg-amber-950" onClick={handleSubmitComment}>ثبت</button>
     </div>
    </>
  );
}

export default CommentBox;