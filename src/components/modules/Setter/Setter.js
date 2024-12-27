'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
function Setter() {
    const pathname = usePathname()
    
    const links = [
        { id: 1, name: "سبد خرید", url: "/cart" },
        { id: 2, name: "پرداخت", url: "/checkout" },
        { id: 3, name: "تکمیل سفارش", url: "/complete-order" },
    ]
  return (
    <div className="flex items-center justify-center h-52" style={{backgroundImage : 'url(https://set-coffee.com/wp-content/uploads/2022/06/back1.jpg)'}}>
        <div className="flex items-center justify-center gap-x-6  text-2xl font-Shabnam-medium">
            {links.map((link , index)=>(
                index!== links.length - 1 ? (
                    <div key={index + 1} className={`flex items-center justify-center gap-x-3 ${pathname === link.url ? 'text-white' : 'text-gray-400'}`}>
                    <Link href={link.url}>{link.name}</Link>
                    <FaArrowLeftLong/>
                </div>
                ) : (
                    <div key={index + 1} className={`flex items-center justify-center gap-x-3 ${pathname === link.url ? 'text-white' : 'text-gray-400'}`}>
                    <span>{link.name}</span>
                </div>
                )
            ))}
        </div>
    </div>
  )
}

export default Setter