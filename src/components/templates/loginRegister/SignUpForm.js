'use client';
import React, { useState, useCallback } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useAuth } from "@/utils/validations/AuthContext";

const SignUpForm = ({ handleStateChanges, state }) => {
  const router = useRouter();
  const { handleSignUp, handleSendOtpCode } = useAuth();

  const handleShowPasswordInputSignUpForm = useCallback(() => {
    handleStateChanges({ isShowPasswordInputSignUpForm: true, isShowRegisterWithVertificationCodeBtn: false });
  }, [handleStateChanges]);

  return (
    <form className="flex flex-col items-center justify-center p-8 shadow-lg w-96 bg-white rounded-lg max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">ثبت نام</h2>
      <input
        type="text"
        placeholder="نام"
        className="w-full h-12 px-4 outline-none border border-slate-300 rounded-lg placeholder:text-gray-500 text-base mb-4"
        value={state.name}
        onChange={(e) => handleStateChanges({ name: e.target.value })}
      />
      <input
        type="number"
        placeholder="شماره موبایل"
        className="w-full h-12 px-4 outline-none border border-slate-300 rounded-lg placeholder:text-gray-500 text-base mb-4"
        value={state.phone}
        onChange={(e) => handleStateChanges({ phone: e.target.value })}
      />
      <input
        type="email"
        placeholder="ایمیل(دلخواه)"
        className="w-full h-12 px-4 outline-none border border-slate-300 rounded-lg placeholder:text-gray-500 text-base mb-4"
        value={state.email}
        onChange={(e) => handleStateChanges({ email: e.target.value })}
      />
      {state.isShowPasswordInputSignUpForm && (
        <input
          type="password"
          placeholder="رمز عبور"
          className="w-full h-12 px-4 outline-none border border-slate-300 rounded-lg placeholder:text-gray-500 text-base mb-4"
          value={state.password}
          onChange={(e) => handleStateChanges({ password: e.target.value })}
        />
      )}
      {state.isShowRegisterWithVertificationCodeBtn && (
        <button className="bg-amber-950 w-full h-12 flex items-center justify-center text-white rounded-lg text-base hover:bg-orange-700 transition duration-300 mb-4" onClick={() => handleSendOtpCode(state.phone, state.name, handleStateChanges)}>
          ثبت نام با کد تایید
        </button>
      )}
      {state.isShowRegisterWithVertificationCodeBtn ? (
        <button
          onClick={handleShowPasswordInputSignUpForm}
          className="bg-amber-950 w-full h-12 flex items-center justify-center text-white rounded-lg text-base hover:bg-orange-700 transition duration-300 mb-4"
        >
          ثبت نام با رمز عبور
        </button>
      ) : (
        <button
          onClick={() => handleSignUp(state.name, state.phone, state.email, state.password)}
          className="bg-amber-950 w-full h-12 flex items-center justify-center text-white rounded-lg text-base hover:bg-orange-700 transition duration-300 mb-4"
        >
          ثبت نام با رمز عبور
        </button>
      )}
      <span
        className="text-blue-500 cursor-pointer text-sm hover:underline mb-4 w-full text-center"
        onClick={() => handleStateChanges({ isShowSignInForm: true, isShowSignupForm: false })}
      >
        برگشت به ورود
      </span>
    </form>
  );
};

export default SignUpForm;