"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import React, { useState, useCallback, lazy, Suspense } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CircularProgress } from "@mui/material";

const SignInForm = dynamic(
  () => import("@/components/templates/loginRegister/SignInForm"),
  {
    loading: () => {
      return (
        <>
          <CircularProgress color="inherit" size={32} />
        </>
      );
    },
  }
);
const ForgotPasswordForm = dynamic(
  () => import("@/components/templates/loginRegister/ForgotPasswordForm"),
  {
    loading: () => {
      return (
        <>
          <CircularProgress color="inherit" size={32} />
        </>
      );
    },
  }
);
const SignUpForm = dynamic(
  () => import("@/components/templates/loginRegister/SignUpForm"),
  {
    loading: () => {
      return (
        <>
          <CircularProgress color="inherit" size={32} />
        </>
      );
    },
  }
);
const OtpForm = dynamic(
  () => import("@/components/templates/loginRegister/OtpForm"),
  {
    loading: () => {
      return (
        <>
          <CircularProgress color="inherit" size={32} />
        </>
      );
    },
  }
);

const LoginRegister = () => {
  const [state, setState] = useState({
    isShowSignInForm: true,
    isShowForgetPasswordForm: false,
    isShowSignupForm: false,
    isShowOtpForm: false,
    name: "",
    phone: "",
    email: "",
    password: "",
    isShowPasswordInputSignUpForm: false,
    isShowRegisterWithVertificationCodeBtn: true,
    code: "",
  });

  const handleStateChange = useCallback((changes) => {
    setState((prevState) => ({ ...prevState, ...changes }));
  }, []);

  return (
    <>
      <ToastContainer />
      <div className="h-screen overflow-hidden flex">
        <div className="w-1/2 h-svh bg-orange-950"></div>
        <div
          className="w-1/2 h-svh flex flex-col items-center justify-center"
          data-aos="fade-down"
        >
          {state.isShowSignInForm && (
            <SignInForm handleStateChange={handleStateChange} />
          )}
          {state.isShowForgetPasswordForm && (
            <ForgotPasswordForm handleStateChange={handleStateChange} />
          )}
          {state.isShowSignupForm && (
            <SignUpForm handleStateChanges={handleStateChange} state={state} />
          )}
          {state.isShowOtpForm && (
            <OtpForm
              handleStateChange={handleStateChange}
              code={state.code}
              phone={state.phone}
              name={state.name}
            />
          )}
          <Link href="/" className="text-gray-700 text-xs mt-8">
            لغو
          </Link>
        </div>
      </div>
    </>
  );
};

export default LoginRegister;
