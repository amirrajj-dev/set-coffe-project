"use client";
import React, { useState, useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";

function ScrollToTop() {
  const [show, setShow] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 500) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      className={`fixed transition-all bottom-6 ${
        show ? "left-6" : "-left-16"
      } bg-slate-100 z-50 border border-gray-300 w-14 h-14 text-2xl font-thin rounded-full flex items-center justify-center shadow-lg`}
      onClick={() => window.scroll(0, 0)}
    >
      <IoIosArrowUp />
    </button>
  );
}

export default ScrollToTop;