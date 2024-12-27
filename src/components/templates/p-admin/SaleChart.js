'use client';
import React from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

function SaleChart() {
  const data = [
    { name: "فروردین", sale: 4000, },
    { name: "اردیبهشت", sale: 3000, },
    { name: "خرداد", sale: 2000,},
    { name: "دی", sale: 2780},
    { name: "بهمن", sale: 1890,},
    { name: "اسفند", sale: 2390 },
    { name: "آبان", sale: 3490, },
  ];

  return (
    <div className=" bg-gradient-to-r from-amber-950 via-amber-900 to-amber-800 shadow-lg rounded-lg w-full mt-4">
      <ResponsiveContainer width={"100%"} height={350}>
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#fff" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#fff" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
          <XAxis dataKey="name" stroke="#fff" />
          <YAxis tickMargin={40} stroke="#fff" />
          <Tooltip contentStyle={{ backgroundColor: '#f5f5f5', color : 'brown' , borderRadius: '10px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }} />
          <Area type="monotone" dataKey="sale" stroke="#c77544" fill="#c77544" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SaleChart;
