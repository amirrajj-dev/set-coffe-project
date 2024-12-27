"use client";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Area
} from "recharts";

function GrowthChart() {
  const data = [
    {
      name: "فروردین",
      current: 4000,
      prev: 2400,
      amt: 2400,
    },
    {
      name: "اردیبهشت",
      current: 3500,
      prev: 4000,
      amt: 2210,
    },
    {
      name: "خرداد",
      current: 5000,
      prev: 3500,
      amt: 2290,
    },
    {
      name: "دی",
      current: 5500,
      prev: 5000,
      amt: 2000,
    },
    {
      name: "بهمن",
      current: 4000,
      prev: 5500,
      amt: 2181,
    },
    {
      name: "اسفند",
      current: 4400,
      prev: 4000,
      amt: 2500,
    },
    {
      name: "آبان",
      current: 8000,
      prev: 4400,
      amt: 2100,
    },
  ];
  return (
    <div className=" bg-gradient-to-r from-amber-950 via-amber-900 to-amber-800 shadow-lg rounded-lg w-full mt-4">
      <ResponsiveContainer width="100%" height={350}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" stroke="#fff"  />
          <YAxis tickMargin={45} stroke="#fff" />
          <Tooltip />
          <Line type="monotone" dataKey="prev" stroke="#c77544" strokeWidth={3} activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="current" stroke="#D06B48" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default GrowthChart;
