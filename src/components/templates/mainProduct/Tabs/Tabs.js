'use client';
import React from "react";
import './Tabs.css'
function Tabs({ setTabValue ,commentsLength }) {
  const [activeTab, setActiveTab] = React.useState(1);
  const tabs = [
    { name: "توضیحات" ,  value : 1 },
    { name: "اطلاعات بیشتر" , value : 2 },
    { name: `نظرات (${commentsLength})` , value : 3 },
  ];

  return (

      <div className="relative z-10 flex items-center justify-center gap-x-8 mt-4 text-base  text-gray-500">
        {tabs.map((tab) => (
          <span
            key={tab.name}
            onClick={(e) => {
              setActiveTab(tab.value);
              setTabValue(tab.value);
            }}
            className={`relative cursor-pointer before:absolute before:left-0 before:right-0 before:-top-8 before:h-0.5 before:bg-slate-900 before:scale-x-0 before:transition-transform before:duration-300 ${
              activeTab === tab.value ? 'active text-slate-900' : ''
            }`}
          >
            {tab.name}
          </span>
        ))}
      </div>
  );
}

export default Tabs;