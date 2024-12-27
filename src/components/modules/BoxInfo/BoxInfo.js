import React from "react";
import { IoStatsChart } from "react-icons/io5";

function BoxInfo({ title, amount, icon }) {
  return (
    <div className="flex items-center justify-between rounded-xl shadow-2xl border-2 border-amber-700 p-6 bg-gradient-to-r from-amber-950 via-amber-900  to-amber-800 hover:bg-gradient-to-l transform hover:-translate-y-1 transition-all duration-300 ease-in-out">
      <div className="flex flex-col">
        <span className="text-3xl font-bold text-amber-300">{amount}</span>
        <h3 className="text-xl text-orange-200 mt-2">مجموع {title}</h3>
        <div className="w-52 h-1 bg-amber-700 my-4 rounded-full"></div>
        <div className="w-44 h-1 bg-amber-700 rounded-full"></div>
      </div>
      <div className="text-6xl text-white">
        {icon}
      </div>
    </div>
  );
}

export default BoxInfo;