'use client';
import { useAuth } from "@/utils/validations/AuthContext";
import { useRouter } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const OtpForm = ({ handleStateChange, code , phone  , name }) => {
  const [timer, setTimer] = useState(60);
  let timerInterval;
  const router = useRouter()
  const  {handleVerifyCode} = useAuth()
  const startTimer = useCallback(()=>{
    timerInterval = setInterval(() => {
      setTimer(prevTime=>{
        if (prevTime <= 0){
          clearInterval(timerInterval);
          return 0;
        }else{
          return prevTime - 1;
        }
      })
    }, 1000);
  })

  useEffect(()=>{
    startTimer()
    return ()=>{
      clearInterval(timerInterval);
    }
  } , [])

  const handleSendCode = async ()=>{
    const response = await fetch('/api/auth/sms/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        phone: phone,
      }),
    });
  }



  return (
    <form className="flex flex-col items-start justify-start p-8 shadow-lg w-96 bg-white rounded-lg max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
      <span className="text-slate-900 text-2xl mt-4 w-full text-center font-semibold">کد تایید</span>
      <span className="text-gray-500 text-base w-full text-center">لطفا کد تایید ارسال شده تایپ کنید</span>
      <p className="text-gray-700 text-lg mt-2 w-full text-center">{phone}</p>
      <input
        onChange={e => handleStateChange({ code: e.target.value })}
        type="text"
        className="w-full h-12 px-3 outline-none border border-slate-300 rounded-lg placeholder:text-gray-500 text-base mt-4"
        placeholder="کد تایید"
      />
      <div className="flex justify-center items-center w-full mt-2 text-lg font-medium text-slate-900">
        <span>{timer}s</span>
      </div>
      <button onClick={()=>handleVerifyCode(code , phone , name)} className="bg-amber-950 w-full h-12 flex items-center justify-center text-white rounded-lg hover:bg-orange-700 transition duration-300 mt-4">
        ثبت کد تایید
      </button>
      <button className="text-blue-500 cursor-pointer text-base mt-4 w-full text-center hover:underline" onClick={()=>handleSendCode()} disabled={timer === 0 ? false : true}>
        ارسال مجدد کد یکبار مصرف
      </button>
    </form>
  );
};

export default React.memo(OtpForm);