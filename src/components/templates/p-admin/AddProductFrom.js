'use client'
import React, { useRef, useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { toast } from "react-toastify";

function AddProductForm() {
  const [state, setState] = useState({
    productName: "",
    shortDescription: "",
    longDescription: "",
    weight: "",
    price: "",
    fever  : "",
    scoreYouGet : "",
    categories: "",
    tags: "",
    image: null,
  });

  const imageRef = useRef()

  const handleStateChange = (changes)=>{
    setState((prevState) => ({...prevState,...changes }));
  }

  const addProduct = async ()=>{
    const formData = new FormData();
    formData.append("title", state.productName)
    formData.append("shortDesc", state.shortDescription)
    formData.append("longDesc", state.longDescription)
    formData.append("weight", state.weight)
    formData.append("price", state.price)
    formData.append("feverAmount", state.fever)
    formData.append("scoreYouGet", state.scoreYouGet)
    formData.append("categories", state.categories)
    formData.append("tags", state.tags)
    formData.append("image", state.image)
    const res = await fetch("/api/products", {
      method: "POST",
      body: formData,
    });

    const result = await res.json()
    if (res.status === 201){
        toast.success('محصول جدید با موفقیت اضافه شد' , {
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
        اضافه کردن محصول جدید
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col">
          <label
            htmlFor="productName"
            className="text-lg font-medium text-amber-800 mb-2"
          >
            نام محصول
          </label>
          <input
            className="h-12 px-4 border border-amber-300 rounded-lg outline-none focus:border-amber-500 focus:ring focus:ring-opacity-50 focus:ring-amber-200 transition"
            type="text"
            id="productName"
            value={state.productName}
            onChange={(e) => handleStateChange({ productName: e.target.value })}
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="shortDescription"
            className="text-lg font-medium text-amber-800 mb-2"
          >
            توضیحات کوتاه محصول
          </label>
          <input
            className="h-12 px-4 border border-amber-300 rounded-lg outline-none focus:border-amber-500 focus:ring focus:ring-opacity-50 focus:ring-amber-200 transition"
            type="text"
            id="shortDescription"
            value={state.shortDescription}
            onChange={e=>handleStateChange({shortDescription: e.target.value})}
          />
        </div>
        <div className="flex flex-col md:col-span-2">
          <label
            htmlFor="longDescription"
            className="text-lg font-medium text-amber-800 mb-2"
          >
            توضیحات بلند محصول
          </label>
          <textarea
            className="h-32 px-4 py-2 border border-amber-300 rounded-lg outline-none focus:border-amber-500 focus:ring focus:ring-opacity-50 focus:ring-amber-200 transition"
            id="longDescription"
            onChange={e=>handleStateChange({longDescription: e.target.value})}
          ></textarea>
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="weight"
            className="text-lg font-medium text-amber-800 mb-2"
          >
            وزن
          </label>
          <input
            className="h-12 px-4 border border-amber-300 rounded-lg outline-none focus:border-amber-500 focus:ring focus:ring-opacity-50 focus:ring-amber-200 transition"
            type="text"
            id="weight"
            value={state.weight}
            onChange={e=>handleStateChange({weight: e.target.value})}
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="odor"
            className="text-lg font-medium text-amber-800 mb-2"
          >
            میزان بو
          </label>
          <input
            className="h-12 px-4 border border-amber-300 rounded-lg outline-none focus:border-amber-500 focus:ring focus:ring-opacity-50 focus:ring-amber-200 transition"
            type="text"
            id="odor"
            value={state.fever}
            onChange={e=>handleStateChange({fever : e.target.value})}
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="score"
            className="text-lg font-medium text-amber-800 mb-2"
          >
            امتیاز دریافتی
          </label>
          <input
            className="h-12 px-4 border border-amber-300 rounded-lg outline-none focus:border-amber-500 focus:ring focus:ring-opacity-50 focus:ring-amber-200 transition"
            type="text"
            id="score"
            value={state.scoreYouGet}
            onChange={e=>handleStateChange({scoreYouGet : e.target.value})}
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="tags"
            className="text-lg font-medium text-amber-800 mb-2"
          >
            برچسب ها
          </label>
          <input
            className="h-12 px-4 border border-amber-300 rounded-lg outline-none focus:border-amber-500 focus:ring focus:ring-opacity-50 focus:ring-amber-200 transition"
            type="text"
            id="tags"
            value={state.tags}
            onChange={e=>handleStateChange({tags : e.target.value})}
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="categories"
            className="text-lg font-medium text-amber-800 mb-2"
          >
            دسته بندی ها
          </label>
          <input
            className="h-12 px-4 border border-amber-300 rounded-lg outline-none focus:border-amber-500 focus:ring focus:ring-opacity-50 focus:ring-amber-200 transition"
            type="text"
            id="categories"
            value={state.categories}
            onChange={e=>handleStateChange({categories : e.target.value})}
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="price"
            className="text-lg font-medium text-amber-800 mb-2"
          >
            قیمت
          </label>
          <input
            className="h-12 px-4 border border-amber-300 rounded-lg outline-none focus:border-amber-500 focus:ring focus:ring-opacity-50 focus:ring-amber-200 transition"
            type="text"
            id="price"
            value={state.price}
            onChange={e=>handleStateChange({price : e.target.value})}
          />
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
        <button onClick={addProduct} className="bg-amber-600 h-12 px-2 col-span-full max-w-xs mx-auto text-white flex items-center justify-center gap-x-2 rounded-lg mt-4 hover:bg-amber-700 transition">
          اضافه کردن محصول جدید
        </button>
      </div>
    </div>
  );
}

export default AddProductForm;
