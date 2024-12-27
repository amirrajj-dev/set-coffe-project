import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import Ticket from "./Ticket";
import Link from "next/link";

function Tickets({ tickets }) {
  return (
    <>
      <div className="shadow-2xl p-6 w-full max-w-lg bg-white rounded-lg">
        <div className="flex items-center justify-between border-b border-gray-300 pb-4 mb-4">
          <h3 className="text-2xl font-bold text-gray-800">تیکت های اخیر</h3>
          <Link
            href={"/p-user/tickets"}
            className="flex items-center justify-center gap-x-2 text-blue-600 hover:text-blue-800 transition-colors"
          >
            <span>همه تیکت ها</span>
            <FaArrowLeftLong />
          </Link>
        </div>
        <div className="flex flex-col gap-y-4">
          {tickets.length > 0 ? (
            tickets.map((ticket) => (
              <Link href={`/p-user/tickets/answer/${ticket._id}`} key={ticket._id}>

                  <Ticket
                    title={ticket.title}
                    department={ticket.department.title}
                    date={ticket.createdAt}
                    isAnswered={ticket.isAnswered}
                  />
              </Link>
            ))
          ) : (
            <h3 className="text-gray-500">تیکتی برای نمایش وجود ندارد</h3>
          )}
        </div>
      </div>
    </>
  );
}

export default Tickets;