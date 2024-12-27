import UserPannelLayout from "@/components/layouts/UserPannelLayout";
import dynamic from "next/dynamic";
const AddTicket = dynamic(()=>import('@/components/templates/p-user/AddTicket') , {
    loading: () => <p>loading...</p>
})
import React from "react";

function SendTicket() {
  return (
    <UserPannelLayout>
      <div className="m-20">
        <h1 className="relative text-slate-950 text-3xl font-Shabnam-medium before:content-[''] before:absolute before:top-1/2 before:right-56 before:w-4/5 before:border-t-2 before:border-slate-900 after:content-[''] after:absolute after:top-1/2 after:-right-[340px] after:w-1/3 after:border-t-2 after:border-slate-900">
          ارسال تیکت جدید
        </h1>
        <AddTicket/>
      </div>
    </UserPannelLayout>
  );
}

export default SendTicket;
