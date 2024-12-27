import React from 'react';
import { LuUploadCloud } from "react-icons/lu";
import { FiCheckCircle, FiClock } from "react-icons/fi"; // Import new icons

function Ticket({title, department, date, isAnswered}) {
  return (
    <div className="flex items-center justify-between bg-gradient-to-r from-amber-950 via-amber-900 to-amber-900 text-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className='flex flex-col gap-y-2'>
        <h4 className="text-xl font-semibold">{title}</h4>
        <button className='text-amber-950 bg-white rounded-full shadow px-4 py-2 font-medium'>{department}</button>
      </div>
      <div className='flex flex-col items-center gap-y-2'>
        <div className="flex items-center justify-center gap-x-1">
          <LuUploadCloud className="text-2xl" /> {/* Adding an icon */}
          <span className='mr-2 text-sm'>{new Date(date).toLocaleDateString('fa-IR')}</span>
        </div>
        {isAnswered ? (
          <h5 className='bg-green-500 text-white px-3 py-1 rounded-full flex items-center gap-x-1'>
            <FiCheckCircle className="text-lg" /> پاسخ داده شده
          </h5>
        ) : (
          <h5 className='bg-red-500 text-white px-3 py-1 rounded-full flex items-center gap-x-1'>
            <FiClock className="text-lg translate-y-px" /> پاسخی داده نشده
          </h5>
        )}
      </div>
    </div>
  );
}

export default Ticket;