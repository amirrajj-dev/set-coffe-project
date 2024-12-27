import React from "react";

function Comment({ name, body, date }) {
  return (
    <div className="flex items-center justify-between bg-gradient-to-r from-blue-100 to-blue-50 shadow-xl rounded-lg p-6 w-4/5 mx-auto mt-4 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 transition duration-300 ease-in-out">
      <div className="flex items-center justify-center gap-x-5">
        <img
          src="https://secure.gravatar.com/avatar/7df44a5f8156d002b45c1c7dbe58c0ac?s=96&d=mm&r=g"
          alt="user profile"
          className="w-20 h-20 rounded-full border-4 border-blue-400 shadow-lg"
        />
        <div className="flex flex-col">
          <span className="font-Shabnam-medium text-lg text-blue-900">{name}</span>
          <span className="font-shabnam-light text-md text-gray-500">کاربر</span>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <span className="text-gray-600">{new Date(date).toLocaleDateString('fa-IR')}</span>
        <p className="text-blue-700 font-Shabnam-bold text-sm mt-2 max-w-xs">{body}</p>
      </div>
    </div>
  );
}

export default Comment;