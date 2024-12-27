import React from 'react';
import { FaArrowLeftLong } from "react-icons/fa6";
import Ticket from './Ticket';
import Order from './Order';
import Link from "next/link";

function Orders() {
  return (
    <>
      <div className="shadow-2xl p-6 w-full max-w-lg bg-white rounded-lg">
        <div className="flex items-center justify-between border-b border-gray-300 pb-4 mb-4">
          <h3 className="text-2xl font-bold text-gray-800">سفارش های اخیر</h3>
          <Link
            href="/p-user/orders"
            className="flex items-center gap-x-2 text-blue-600 hover:text-blue-800 transition-colors"
          >
            <span>همه ی سفارش ها</span>
            <FaArrowLeftLong />
          </Link>
        </div>
        <div className="flex flex-col gap-y-4">
          <Order />
          <Order />
          <Order />
          <Order />
        </div>
      </div>
    </>
  );
}

export default Orders;