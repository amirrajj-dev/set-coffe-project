import UserPannelLayout from "@/components/layouts/UserPannelLayout";
import Answer from "@/components/templates/p-user/Answer";
import ticketsModel from "@/utils/db/models/ticket";
import Link from "next/link";
import React from "react";

async function MainTicket({ params }) {
  const { id } = params;
  const ticket = await ticketsModel.findOne({_id : id} , 'createdBy body createdAt').populate('user' , 'name')
  
  const answerTicket = await ticketsModel.findOne({parentTicket : ticket._id}).populate('user')
  
  
  return (
    <UserPannelLayout>
      <div className="m-20">
        <div className="flex w-full justify-between items-center mb-8">
          <h1 className="relative text-slate-950 text-3xl font-Shabnam-medium before:content-[''] before:absolute before:top-1/2 before:right-48 before:w-[300px] before:border-t-2 before:border-slate-900 after:content-[''] after:absolute after:top-1/2 after:-right-[200px] after:w-[100px] after:border-t-2 after:border-slate-900">
            پاسخ به تیکت
          </h1>
          <Link
            href={"/p-user/tickets/sendTicket"}
            className="bg-amber-950 w-80 h-12 rounded-3xl shadow-md flex items-center justify-center text-white transition-colors hover:bg-amber-900"
          >
            ارسال تیکت جدید
          </Link>
        </div>
        <div className="flex flex-col gap-y-4">
          <div className="self-start">
            <Answer type="user" ticket={ticket} />
          </div>
          <div className="self-end">
            <Answer type="admin" ticket={answerTicket} />
          </div>
        </div>
      </div>
    </UserPannelLayout>
  );
}

export default MainTicket;