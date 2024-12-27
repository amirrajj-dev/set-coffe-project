"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";
import {
  validateEmail,
  validatePassword,
  validatePhone,
} from "@/utils/validations/auth";
import { toast } from "react-toastify";
import { useAuth } from "@/utils/validations/AuthContext";
function EditAccount() {
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
    img: "",
  });

  const [user , setUser] = useState(null)
  const {handleLogOut} = useAuth()
  const fileInputRef = useRef(null);

  const handleStateChange = (changes) => {
    setState((prevState) => ({ ...prevState, ...changes }));
  };

  const handleEditUser = async () => {
    
    const { username, email, password, phone, img } = state;
    const isValidPassword = await validatePassword(password?.trim())
    const isValidEmail = await validateEmail(email?.trim())
    const isValidPhone = await validatePhone(phone?.trim())

    const updatedUser = {};
    if (username?.trim() !== user?.username) {
      updatedUser.username = username?.trim();
    }

    if (isValidEmail && email.trim() !== user?.email) {
      updatedUser.email = email?.trim();
    }

    if (isValidPhone && phone.trim() !== user?.phone) {
      updatedUser.phone = phone?.trim();
    }
    
  
    if (isValidPassword) {
      
      updatedUser.password = password?.trim();
    }

    if (img?.trim()) {
      updatedUser.img = img?.trim();
    }

    if (Boolean(Object.keys(updatedUser).length)){
      const response = await fetch('/api/user' , {
        method : 'POST' ,
        headers : {
          'Content-Type' : 'application/json',
        },
        body : JSON.stringify(updatedUser),
      })
      const result = await response.json()
      
      if (response.status === 200){
        toast.success('به روزرسانی حساب کاربری با موفقیت انجام شد :)' , {
          position : 'top-left',
          autoClose : 2500
        }) ,
        setTimeout(() => {
          handleLogOut()
        }, 3000);
      }
    }else{
      toast.error('لطفا فیلدهای مورد نظر را پر کنید' , {
        position : 'top-left',
        autoClose : 3000
      })
    }

  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      fileInputRef.current = file.name;
      handleStateChange({ img: fileInputRef.current });
    }
  };

  const handleDeleteFile = () => {
    fileInputRef.current = null;
    handleStateChange({ img: "" });
  };

  const handleFileUploadClick = () => {
    fileInputRef.current.click();
  };

  useEffect(() => {
    const getUser = async ()=>{
      const response = await fetch('/api/auth/me')
      const user = await response.json()
      setUser(user)
      if (user){
       handleStateChange({
        username: user.username,
        email : user.email ,
        phone : user.phone
       })
      }
    }
    getUser()
  }, []);

  return (
    <>
      <div className="m-20">
        <h1 className="relative text-slate-950 text-3xl font-Shabnam-medium before:content-[''] before:absolute before:top-1/2 before:right-44  before:w-4/5 before:border-t-2 before:border-slate-900 after:content-[''] after:absolute after:top-1/2 after:-right-[340px] after:w-1/3 after:border-t-2 after:border-slate-900">
          جزعیات اکانت
        </h1>
        <div className="grid grid-cols-2 gap-x-10 mt-12">
          <div className="flex flex-col gap-y-6">
            <div className="flex flex-col gap-y-2">
              <label htmlFor="username">نام کاربری</label>
              <input
                type="text"
                id="username"
                value={state.username}
                onChange={(e) =>
                  handleStateChange({ username: e.target.value })
                }
                className="border-2 outline-none border-amber-950 px-2 h-10 rounded"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label htmlFor="email">ایمیل</label>
              <input
                type="email"
                id="email"
                value={state.email}
                onChange={(e) => handleStateChange({ email: e.target.value })}
                className="border-2 outline-none border-amber-950 px-2 h-10 rounded"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label htmlFor="phone">شماره تماس</label>
              <input
                type="text"
                id="phone"
                value={state.phone}
                onChange={(e) => handleStateChange({ phone: e.target.value })}
                className="border-2 outline-none border-amber-950 px-2 h-10 rounded"
              />
            </div>
          </div>
          <div className="flex flex-col gap-y-5">
            <div className="flex items-center justify-center gap-x-4">
              <img
                src="https://secure.gravatar.com/avatar/7c598d2d8f3262abe7dc95dbdba9ba7b?s=60&d=mm&r=g"
                className="w-52 rounded-full"
                alt="profile"
              />
              <div className="flex flex-col gap-y-4 self-end relative">
                <button
                  onClick={handleFileUploadClick}
                  className="bg-amber-950 flex items-center justify-center cursor-pointer gap-x-2 text-white rounded shadow-md w-72 h-10"
                >
                  <span>تغییر</span>
                  <FaCloudUploadAlt className="" />
                </button>
                <input
                  type="file"
                  ref={fileInputRef}
                  className="w-72 h-10 absolute opacity-0 cursor-pointer"
                  onChange={(e) => handleFileChange(e)}
                />

                <button
                  onClick={handleDeleteFile}
                  className="bg-amber-950 flex items-center justify-center gap-x-2 text-white rounded shadow-md w-72 h-10"
                >
                  <span>حذف</span>
                  <FaTrashCan className="" />
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-y-2">
              <label htmlFor="password">رمز عبور</label>
              <input
                type="text"
                id="password"
                value={state.password}
                onChange={(e) =>
                  handleStateChange({ password: e.target.value })
                }
                className="border-2 outline-none border-amber-950 px-2 h-10 rounded"
              />
            </div>
          </div>
          <button
            className="bg-amber-950 flex items-center justify-center gap-x-2 text-white rounded shadow-md w-80 font-Shabnam-medium h-11 col-span-2 mt-12 text-xl mx-auto"
            onClick={handleEditUser}
          >
            ثبت تغیرات
          </button>
        </div>
      </div>
    </>
  );
}

export default EditAccount;
