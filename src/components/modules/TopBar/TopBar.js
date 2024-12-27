import React from "react";
import { IoMdSearch } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import { cookies } from "next/headers";
import { decodeToken } from "@/utils/validations/auth";
import usersModel from "@/utils/db/models/user";
import connectToDb from "@/utils/db/db";

async function TopBar() {
  connectToDb()
  const token = cookies().get('token').value;
  const tokenPayload = decodeToken(token)
  const user = await usersModel.findOne({name : tokenPayload.name})
  
  return (
    <div className="fixed top-0 left-0 right-96  bg-gradient-to-r from-amber-950 via-amber-900 to-amber-800 h-14 p-1 text-white z-30">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-2 mr-4">
          <img
            src="https://secure.gravatar.com/avatar/9e8fcdb62a2bd8b027c6f5ebe4588379?s=60&d=mm&r=g"
            className="w-10 h-10 rounded-full"
            alt=""
          />
          <div className="flex flex-col">
            <span className="text-white">{user.name}</span>
            <span className="text-gray-400">{user.role === 'admin' ? 'ادمین' : "کاربر"}</span>
          </div>
        </div>
        <div className="flex items-center gap-x-6">
          <div className="relative">
            <input type="text" className="w-72 h-8 px-2 rounded" placeholder="جستجو کنید ..." />
            <IoMdSearch className="text-white text-xl absolute  bg-gradient-to-r from-amber-950 via-amber-900 to-amber-800 w-8 h-8 p-1 left-0 top-0  flex items-center justify-center rounded-full" />
          </div>
          <div className="relative">
            <FaBell className="text-xl text-amber-950 bg-white w-8 h-8 p-1 rounded-full ml-14" />
            <span className="absolute bg-amber-500 w-4 h-4 p-1 top-0 -right-2 text-black rounded-full flex items-center justify-center">1</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
