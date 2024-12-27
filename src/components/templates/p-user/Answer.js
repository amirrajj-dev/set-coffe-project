import React from "react";

function Answer({ type, ticket }) {
  if (type === "user") {
    return (
      <div className="bg-amber-950 w-96 p-6 rounded-xl flex flex-col gap-y-4 text-sm text-white shadow-lg transition-transform transform hover:scale-105">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center gap-x-4">
            <img
              src="https://secure.gravatar.com/avatar/7c598d2d8f3262abe7dc95dbdba9ba7b?s=60&d=mm&r=g"
              alt="profile"
              className="w-14 h-14 rounded-full border-2 border-gray-300"
            />
            <div className="flex flex-col gap-y-1">
              <span className="font-semibold">{ticket.user.name}</span>
              <span className="text-gray-300 text-xs">
                {ticket.createdBy === "admin" ? "ادمین" : "کاربر"}
              </span>
            </div>
          </div>
          <span className="text-xs text-gray-400">
            {new Date(ticket.createdAt).toLocaleDateString("fa-IR")}
          </span>
        </div>
        <div className="bg-white text-black rounded-lg p-4 shadow-inner border-l-4 border-amber-950">
          {ticket.body}
        </div>
      </div>
    );
  }

  if (type === "admin") {
    return (
      <>
        {ticket ? (
          <div className="bg-gray-100 w-96 p-6 rounded-xl flex flex-col gap-y-4 text-sm text-amber-950 shadow-lg transition-transform transform hover:scale-105">
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-center gap-x-4">
                <img
                  src="https://secure.gravatar.com/avatar/7c598d2d8f3262abe7dc95dbdba9ba7b?s=60&d=mm&r=g"
                  alt="profile"
                  className="w-14 h-14 rounded-full border-2 border-amber-300"
                />
                <div className="flex flex-col gap-y-1">
                  <span className="font-semibold">{ticket.user.name}</span>
                  <span className="text-amber-400 text-xs">ادمین</span>
                </div>
              </div>
              <span className="text-xs text-gray-500">{new Date(ticket.createdAt).toLocaleDateString('fa-IR')}</span>
            </div>
            <div className="bg-amber-950 text-white rounded-lg p-4 shadow-inner border-l-4 border-gray-100">
              {ticket.body}
            </div>
          </div>
        ) : (
            <h3 className="bg-gradient-to-r from-amber-950 via-amber-900 to-amber-900 text-white rounded-3xl shadow-2xl border border-orange-500 p-8 text-center animate-bounce">
            <span className="block text-2xl font-extrabold mb-2">😔 هیچ پاسخی موجود نیست</span>
            <span className="block text-base font-light italic">پاسخی برای این تیکت ثبت نشده است</span>
          </h3>
          
        )}
      </>
    );
  }

  return null;
}

export default Answer;
