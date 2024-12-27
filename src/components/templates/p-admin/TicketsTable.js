"use client";
import React from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import Tickets from "../p-user/Tickets";
import withReactContent from "sweetalert2-react-content";
import { MdOutlineClose } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";

function TicketsTable({ tickets }) {
  const mySwal = withReactContent(Swal);
  const answerTicket = async (ticketId) => {
    mySwal
      .fire({
        title: "پاسخ مورد نظر را وارد کنید🍓",
        icon: "question",
        iconColor: "#fff",
        background: "#92400e",
        color: "#fff",
        confirmButtonText: "ثبت پاسخ",
        confirmButtonColor: "#fcd34d",
        html: (
          <>
            <textarea
              id="answerTicketArea"
              className="bg-amber-300 rounded w-4/5 h-32 outline-none bordeer border-orange-600 shadow p-4 text-slate-950"
            ></textarea>
          </>
        ),
        preConfirm: () => {
          const answerTicketArea =
            document.querySelector("#answerTicketArea").value;
          return {
            answerTicketArea,
          };
        },
      })
      .then(async (res) => {
        if (res.isConfirmed) {
          const ticketAnswer = res.value.answerTicketArea;
          const response = await fetch("/api/tickets", {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              ticketAnswer,
              id: ticketId,
            }),
          });
          const result = await response.json();

          if (response.status === 200) {
            toast.success("تیکت مورد نظر با موفقیت پاسخ داده شد", {
              autoClose: 3000,
              position: "top-left",
            });
          }
        }
      });
  };

  const deleteTicket = async (ticketId) => {
    const isSure = confirm("آیا از حذف تیکت اطمینان دارید ؟");
    if (isSure) {
      const response = await fetch(`/api/tickets/${ticketId}`, {
        method: "DELETE",
      });

      const result = await response.json();

      if (response.status === 200) {
        toast.info("تیکت با موفقیت حذف شد :)", {
          position: "top-left",
          autoClose: 3000,
        });
      }
    }
  };

  const banUser = async (phone) => {
    const isSure = confirm("آیا از بن کاربر اطمینان دارید ؟");
    if (isSure) {
      const response = await fetch("/api/user/ban", {
        method: "POST",
        headers: {
          "Content-Type": "applicaation/json",
        },
        body: JSON.stringify({ phone }),
      });

      if (response.status === 201) {
        toast.success("فرد مورد نظر با موفقیت بن شد :)", {
          position: "top-left",
          autoClose: 3000,
        });
      }
    }
  };

  return (
    <table className="mt-12 w-4/5 mx-auto bg-amber-950 rounded-lg overflow-hidden shadow-lg text-center text-white">
      <thead className="bg-amber-800 text-nowrap">
        <tr>
          <th className="p-4">شناسه</th>
          <th className="p-4">نام و نام خانوادگی</th>
          <th className="p-4">عنوان</th>
          <th className="p-4">دپارتمان</th>
          <th className="p-4">مشاهده</th>
          <th className="p-4">پاسخ</th>
          <th className="p-4">بن</th>
          <th className="p-4">وضعیت پاسخ</th>
        </tr>
      </thead>
      <tbody>
        {tickets.filter(ticket=>ticket.title !== 'تیکت پاسخ').map((ticket, index) => (
          <tr
            key={ticket._id}
            className="border-t border-amber-600 hover:bg-amber-700"
          >
            <td className="p-4">{index + 1}</td>
            <td className="p-4">{ticket.user.name}</td>
            <td className="p-4">{ticket.title}</td>
            <td className="p-4">{ticket.subDepartment.title}</td>
            <td className="p-4">
              <button
                className="bg-blue-500 text-sm rounded-lg py-2 px-4 text-white hover:bg-slate-400"
                onClick={() =>
                  Swal.fire({
                    title: ticket.body,
                    icon: "info",
                    iconColor: "#fff",
                    background: "#92400e",
                    color: "#fff",
                  })
                }
              >
                مشاهده
              </button>
            </td>
            <td className="p-4">
              <button
                onClick={() => answerTicket(ticket._id)}
                className="bg-green-600 text-sm rounded-lg py-2 px-4 text-white hover:bg-slate-400"
              >
                پاسخ
              </button>
            </td>
            <td className="p-4">
              <button
                className="bg-red-900 text-sm rounded-lg py-2 px-4 text-white hover:bg-slate-400"
                onClick={() => banUser(ticket.user.phone)}
              >
                بن
              </button>
            </td>
            <td className="p-4 flex items-center justify-center translate-y-3 text-xl">
              {ticket.isAnswered ? <FaCheck className="text-green-600"/> : <MdOutlineClose className="text-red-600" />}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default React.memo(TicketsTable);
