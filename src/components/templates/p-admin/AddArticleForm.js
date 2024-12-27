'use client'
import React, { useRef, useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { toast } from "react-toastify";

function AddArticleForm() {
  const [state, setState] = useState({
    title: "",
    shortDesc: "",
    longDesc: "",
    image: null,
  });

  const imageRef = useRef()

  const handleStateChange = (changes)=>{
    setState((prevState) => ({...prevState,...changes }));
  }

  const addArticle = async ()=>{
    
    const formData = new FormData();
    formData.append("title", state.title)
    formData.append("shortDesc", state.shortDesc)
    formData.append("longDesc", state.longDesc)
    formData.append("image", state.image)
    const res = await fetch("/api/blogs", {
      method: "POST",
      body: formData,
    });
    

    if (res.status === 201){
        toast.success('مقاله با موفقیت اضافه شد' , {
            position : 'top-left',
            autoClose : 3000
        })
    }
    
  }

  const handleImageChange = (e)=>{
    const file = e.target.files[0]
    if (file){
      imageRef.current = file
      handleStateChange({image: file})
    }
  }

  return (
    <div className="max-w-4xl mx-auto mt-12 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-center text-amber-900 mb-8">
        اضافه کردن مقاله جدید
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col">
          <label
            htmlFor="productName"
            className="text-lg font-medium text-amber-800 mb-2"
          >
            نام مقاله
          </label>
          <input
            className="h-12 px-4 border border-amber-300 rounded-lg outline-none focus:border-amber-500 focus:ring focus:ring-opacity-50 focus:ring-amber-200 transition"
            type="text"
            id="productName"
            value={state.title}
            onChange={(e) => handleStateChange({ title: e.target.value })}
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="shortDesc"
            className="text-lg font-medium text-amber-800 mb-2"
          >
            توضیحات کوتاه مقاله
          </label>
          <input
            className="h-12 px-4 border border-amber-300 rounded-lg outline-none focus:border-amber-500 focus:ring focus:ring-opacity-50 focus:ring-amber-200 transition"
            type="text"
            id="shortDesc"
            value={state.shortDesc}
            onChange={e=>handleStateChange({shortDesc: e.target.value})}
          />
        </div>
        <div className="flex flex-col md:col-span-2">
          <label
            htmlFor="longDesc"
            className="text-lg font-medium text-amber-800 mb-2"
          >
            توضیحات بلند مقاله
          </label>
          <textarea
            className="h-32 px-4 py-2 border border-amber-300 rounded-lg outline-none focus:border-amber-500 focus:ring focus:ring-opacity-50 focus:ring-amber-200 transition"
            id="longDesc"
            onChange={e=>handleStateChange({longDesc: e.target.value})}
          ></textarea>
        </div>
        <div className="flex flex-col col-span-full items-center relative">
          <input
            className="h-12 max-w-xs absolute opacity-0 w-full border border-amber-300 rounded-lg outline-none"
            type="file"
            id="productImage"
            ref={imageRef}
            onChange={(e)=>handleImageChange(e)}
          />
          <button className="bg-amber-600 h-12 w-full max-w-xs text-white flex items-center justify-center gap-x-2 rounded-lg mt-2 hover:bg-amber-700 transition">
            انتخاب عکس
            <FaCloudUploadAlt />
          </button>
        </div>
        <button onClick={addArticle} className="bg-amber-600 h-12 px-2 col-span-full max-w-xs mx-auto text-white flex items-center justify-center gap-x-2 rounded-lg mt-4 hover:bg-amber-700 transition">
          اضافه کردن مقاله جدید
        </button>
      </div>
    </div>
  );
}

export default AddArticleForm;