import React from "react";
import Tickets from "./Tickets";
import Ticket from "./Ticket";
import Link from "next/link";

function AllTickets({ tickets }) {

  return (
    <>
      <div className="mt-12">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center gap-x-12">
            <select
              name=""
              id=""
              className="w-52 outline-none rounded-sm border-b border-amber-950 p-1"
            >
              <option value="all">همه</option>
              <option value="all">فرستاده شده</option>
              <option value="all">دریافتی</option>
            </select>
            <select
              name=""
              id=""
              className="w-52 outline-none rounded-sm border-b border-amber-950 p-1"
            >
              <option value="all">همه</option>
              <option value="all">باز</option>
              <option value="all">بسته</option>
              <option value="all">پاسخ داده شده</option>
              <option value="all">پایان یافته</option>
            </select>
            <select
              name=""
              id=""
              className="w-52 outline-none rounded-sm border-b border-amber-950 p-1"
            >
              <option value="all">تاریخ پاسخ</option>
              <option value="all">تاریخ ایجاد</option>
            </select>
          </div>
          <button className="bg-amber-950 w-52 h-10 rounded-3xl shadow-md flex items-center justify-center text-white transition-colors hover:bg-amber-900">
            اعمال
          </button>
        </div>
        <div className="flex flex-col gap-y-4 mt-20">
          {tickets.length > 0 ? (
            tickets.map((ticket) => (
              <Link href={`/p-user/tickets/answer/${ticket._id}`}>
                <Ticket
                  title={ticket.title}
                  department={ticket.department.title}
                  date={ticket.createdAt}
                  isAnswered={ticket.isAnswered}
                />
              </Link>
            ))
          ) : (
            <div className="text-center text-amber-950 text-2xl mt-20">
              تیکتی وجود ندارد
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default AllTickets;
