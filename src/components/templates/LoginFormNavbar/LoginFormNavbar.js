'use client';
import Link from "next/link";
import React from "react";
import { useAuth } from "@/utils/validations/AuthContext";

function LoginFormNavbar() {
  const [identifier, setIdentifier] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { handleSignIn } = useAuth();

  return (
    <div className="flex flex-col invisible opacity-0 transition-all transform translate-y-10 p-6 absolute bg-white w-[320px] rounded-lg shadow-xl group-hover:visible group-hover:opacity-100 group-hover:translate-y-0">
      <div className="flex items-center justify-between border-b border-gray-300 pb-4 mb-4">
        <Link href="/" className="text-lg font-bold text-gray-800 hover:text-blue-600 transition">
          ورود
        </Link>
        <Link href="/" className="font-light text-gray-800 hover:text-blue-600 transition">
          عضویت
        </Link>
      </div>
      <div className="flex flex-col gap-y-2">
        <label htmlFor="emailPhone" className="text-sm font-medium text-gray-700">
          ایمیل / شماره موبایل <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          id="emailPhone"
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
          className="w-full bg-white border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      <div className="flex flex-col gap-y-2 mt-4">
        <label htmlFor="password" className="text-sm font-medium text-gray-700">
          گذرواژه <span className="text-red-600">*</span>
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full bg-white border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      <button
        className="w-full py-3 mt-6 text-white bg-blue-600 rounded-md shadow-lg hover:bg-blue-700 transition duration-300"
        onClick={() => handleSignIn(identifier, password)}
      >
        ورود
      </button>
      <div className="flex items-center mt-4">
        <input type="checkbox" id="rememberMe" className="" />
        <label htmlFor="rememberMe" className="text-sm text-gray-700 mr-2">
          مرا به خاطر بسپار
        </label>
      </div>
      <Link href="/" className="mt-4 text-sm text-blue-600 hover:underline">
        گذرواژه خود را فراموش کرده اید؟
      </Link>
      <div className="my-4 text-center text-sm text-gray-600">یا</div>
      <button
        className="w-full py-3 text-white bg-green-600 rounded-md shadow-lg hover:bg-green-700 transition duration-300"
      >
        ورود با کد یک بار مصرف
      </button>
    </div>
  );
}

export default LoginFormNavbar;