import AdminPannelLayout from "@/components/layouts/AdminPannelLayout";
import TicketsTable from "@/components/templates/p-admin/TicketsTable";
import connectToDb from "@/utils/db/db";
import ticketsModel from "@/utils/db/models/ticket";
import usersModel from "@/utils/db/models/user";
import React from "react";

async function Tickets() {
    connectToDb()
    const users = await usersModel.find({role : 'user'})
    const tickets = await ticketsModel.find({}).populate('subDepartment user')
    
  return (
    <AdminPannelLayout>
      <div className="m-20">
        <h1 className="relative text-slate-950 text-3xl font-Shabnam-medium before:content-[''] before:absolute before:top-1/2 before:right-52 before:w-4/5 before:border-t-2 before:border-slate-900 after:content-[''] after:absolute after:top-1/2 after:-right-[340px] after:w-1/3 after:border-t-2 after:border-slate-900">
          لیست تیکت ها
        </h1>
      </div>
      <TicketsTable tickets={JSON.parse(JSON.stringify(tickets))} />
    </AdminPannelLayout>
  );
}

export default Tickets;
