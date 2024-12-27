import React, { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useAuth } from "@/utils/validations/AuthContext";

const SignInForm = ({ handleStateChange }) => {
  const [identifier, setIdentifier] = useState('');
  const [signInPassword, setSignInPassword] = useState('');
  const { handleSignIn } = useAuth();

  return (
    <form className="flex flex-col items-center justify-center p-6 w-96  shadow-lg  bg-white rounded-lg max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">ورود به حساب کاربری</h2>
      <input
        type="text"
        placeholder="ایمیل / شماره موبایل"
        className="w-full h-12 px-4 outline-none border border-slate-300 rounded-lg placeholder:text-gray-500 text-base mb-4"
        value={identifier}
        onChange={(e) => setIdentifier(e.target.value)}
      />
      <input
        type="password"
        placeholder="رمز عبور"
        className="w-full h-12 px-4 outline-none border  border-slate-300 rounded-lg placeholder:text-gray-500 text-base mb-4"
        value={signInPassword}
        onChange={(e) => setSignInPassword(e.target.value)}
      />
      <div className="flex items-center gap-x-2 text-sm mb-4 w-full">
        <input type="checkbox" id="rememberMe" className="form-checkbox h-4 text-orange-600 border-slate-300 rounded" />
        <label htmlFor="rememberMe" className="text-gray-500">مرا به یاد داشته باش</label>
      </div>
      <button className="bg-amber-950 w-full h-12 flex items-center justify-center text-white rounded-lg text-base hover:bg-orange-700 transition duration-300 mb-4" onClick={() => handleSignIn(identifier, signInPassword)}>
        ورود
      </button>
      <span 
        className="text-blue-500 text-sm cursor-pointer hover:underline mb-4 w-full text-center"
        onClick={() => handleStateChange({ isShowForgetPasswordForm: true, isShowSignInForm: false })}
      >
        رمز عبور خود را فراموش کرده اید؟
      </span>
      <button className="bg-gray-100 w-full h-12 flex items-center justify-center text-gray-700 text-base border border-gray-300 rounded-lg mb-4 hover:bg-gray-200 transition duration-300" onClick={() => handleStateChange({ isShowOtpForm: true, isShowSignInForm: false })}>
        ورود با کد یک بار مصرف
      </button>
      <span className="text-gray-500 text-sm mb-4 font-medium w-full text-center">
        آیا حساب کاربری ندارید ؟
      </span>
      <button className="bg-amber-950 w-full h-12 flex items-center justify-center text-white text-base border border-gray-400 rounded-lg hover:bg-gray-400 transition duration-300" onClick={() => handleStateChange({ isShowSignInForm: false, isShowSignupForm: true })}>
        ثبت نام
      </button>
    </form>
  );
};

export default SignInForm;