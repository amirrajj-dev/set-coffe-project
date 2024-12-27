import React from "react";
import UserPannelLayout from "@/components/layouts/UserPannelLayout";
import Link from "next/link";
import AllTickets from "@/components/templates/p-user/AllTickets";
import { authUser } from "@/utils/validations/auth";
import ticketsModel from "@/utils/db/models/ticket";
import connectToDb from "@/utils/db/db";

async function Tickets() {
    connectToDb()
    const user = await authUser()
    
    const tickets = await ticketsModel.find({user : user?._id}).populate('department subDepartment' , '-__v').sort({_id : -1})
     
  return (
    <UserPannelLayout>
      <div className="m-20">
        <div className="flex w-full">
          <h1 className="relative w-4/5 mr-4 text-slate-950 text-3xl font-Shabnam-medium before:content-[''] before:absolute before:top-1/2 before:right-44 before:w-3/5 before:border-t-2 before:border-slate-900 after:content-[''] after:absolute after:top-1/2 after:-right-[250px] after:w-1/3 after:border-t-2 after:border-slate-900">
             همه تیکت ها
          </h1>
          <Link href={'/p-user/tickets/sendTicket'} className="bg-amber-950 w-80 h-12 rounded-3xl shadow-md flex items-center justify-center text-white transition-colors hover:bg-amber-900">ارسال تیکت جدید</Link>
        </div>
        <AllTickets tickets={tickets}/>
      </div>
    </UserPannelLayout>
  );
}

export default Tickets;