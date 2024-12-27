'use client'
import React, { useState } from "react";
import { toast } from "react-toastify";

function CommentBox({blogId }) {
  // State variable to store all input values
  const [formData, setFormData] = useState({
    body: "",
    name: "",
    email: "",
    saveInfo: false,
  });

  // Unified change handler function for all input fields
  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: type === 'checkbox' ? checked : value,
    }));
  };

  const submitComment = async ()=>{
    const newComment = {
        username : formData.name, 
        email : formData.email,
        commentBody : formData.body,
        rememberMe : formData.saveInfo,
        blogId : blogId, 
    }
    
    const response = await fetch('/api/comments' , {
        method : 'POST',
        headers : {
          'Content-Type' : 'application/json',
        },
        body : JSON.stringify(newComment)
    })

    const result = await response.json()
    

    if (response.status === 201){
        toast.success("کامنت شما با موفقیت ارسال شد" , {
            position: 'top-left',
            autoClose: 3000,
        })
    }
    
  }

  return (
    <div className="my-8">
      <div className="flex flex-col gap-y-2">
        <label htmlFor="body">
          دیدگاه <span className="text-red-500">*</span>
        </label>
        <textarea
          id="body"
          value={formData.body}
          onChange={handleChange}
          className="outline-none border border-gray-300 p-4 rounded h-44"
        ></textarea>
      </div>
      <div className="flex items-center gap-x-10 my-6">
        <div className="flex flex-col gap-y-2 w-1/2">
          <label htmlFor="name">
            نام<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="outline-none border border-gray-300 p-2 w-full rounded"
          ></input>
        </div>
        <div className="flex flex-col gap-y-2 w-1/2">
          <label htmlFor="email">
            ایمیل<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="outline-none border border-gray-300 p-2 w-full rounded"
          ></input>
        </div>
      </div>
      <div className="flex items-center justify-start gap-x-1.5 w-fit text-nowrap">
        <input
          type="checkbox"
          id="saveInfo"
          checked={formData.saveInfo}
          onChange={handleChange}
          className="outline-none border border-gray-300 p-2 w-full rounded"
        ></input>
        <label htmlFor="saveInfo">
          {" "}
          ذخیره نام، ایمیل در مرورگر برای زمانی که دوباره دیدگاهی
          می‌نویسم.
          <span className="text-red-500">*</span>
        </label>
      </div>
      <button onClick={submitComment} className="bg-emerald-600 flex items-center justify-center text-white font-Shabnam-medium rounded shadow w-44 h-10 mt-4 border-b-2 border-emerald-900 transition-colors hover:bg-emerald-700">
        فرستادن دیدگاه
      </button>
    </div>
  );
}

export default CommentBox;