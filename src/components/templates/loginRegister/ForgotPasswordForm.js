'use client';
import React from "react";

const ForgotPasswordForm = ({ handleStateChange }) => {

  return (
    <form className="flex flex-col items-center justify-center p-8 w-96 shadow-lg  bg-white rounded-lg max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">بازنشانی رمز عبور</h2>
      <input
        type="text"
        placeholder="ایمیل / شماره موبایل"
        className="w-full h-12 px-4 outline-none border border-slate-300 rounded-lg placeholder:text-gray-500 text-base mb-4"
      />
      <button className="bg-amber-950 w-full h-12 flex items-center justify-center text-white rounded-lg text-base hover:bg-orange-700 transition duration-300 mb-4">
        بازنشانی رمز عبور
      </button>
      <span
        className="text-blue-500 cursor-pointer text-sm hover:underline mb-4 w-full text-center"
        onClick={() => handleStateChange({ isShowForgetPasswordForm: false, isShowSignInForm: true })}
      >
        برگشت به ورود
      </span>
    </form>
  );
};

export default ForgotPasswordForm;