"use client";
import React from "react";
import { toast } from "react-toastify";
function ContactUsForm() {
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [company, setCompany] = React.useState("");
  const handleContactUs = async () => {
    if (
      email.trim().length < 10 ||
      name.trim().length < 8 ||
      message.trim().length < 8
    ) {
      toast.error("لطفا تمام فیلد های مورد نیاز  را پر کنید !!", {
        position: "top-left",
        autoClose: 3000,
      });
    } else {
      const request = {
        email,
        name,
        phone,
        message,
        company,
      };

      const response = await fetch("/api/contactus", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(request),
      });

      if (response.status === 201) {
        toast.success("پیام با موفقیت ارسال شد :)", {
          position: "top-left",
          autoClose: 3000,
        });
        setEmail("");
        setName("");
        setPhone("");
        setMessage("");
        setCompany("");
      } else {
        toast.error("خطایی رخ داد :(", {
          position: "top-left",
          autoClose: 3000,
        });
      }
    }
  };
  return (
    <div className="grid grid-cols-2 gap-4 shadow-lg">
      <div className="flex flex-col gap-y-3">
        <label htmlFor="email">آدرس ایمیل</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-60 h-11 outline-none border border-gray-300 rounded px-2"
          type="email"
          id="email"
        />
      </div>
      <div className="flex flex-col gap-y-3">
        <label htmlFor="family">نام و نام خانوادگی</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-60 h-11 outline-none border border-gray-300 rounded px-2"
          type="text"
          id="family"
        />
      </div>
      <div className="flex flex-col gap-y-3">
        <label htmlFor="company">نام شرکت</label>
        <input
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="w-60 h-11 outline-none border border-gray-300 rounded px-2"
          type="text"
          id="company"
        />
      </div>
      <div className="flex flex-col gap-y-3">
        <label htmlFor="phone">شماره تماس</label>
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-60 h-11 outline-none border border-gray-300 rounded px-2"
          type="text"
          id="phone"
        />
      </div>
      <div className="flex flex-col gap-y-3 col-span-full">
        <label htmlFor="body">درخواست شما</label>
        <textarea
          id="body"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full h-28 outline-none border border-gray-300 rounded p-2"
        ></textarea>
      </div>
      <button
        onClick={handleContactUs}
        className="col-span-full bg-orange-950 text-white flex items-center justify-center h-11 rounded"
      >
        ارسال
      </button>
    </div>
  );
}

export default ContactUsForm;
