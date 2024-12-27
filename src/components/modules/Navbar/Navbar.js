"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { LuUser2 } from "react-icons/lu";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import { useAuth } from "@/utils/validations/AuthContext";
import dynamic from "next/dynamic";
import Basket from "@/components/modules/Basket/Basket";
import { useBaket } from "@/utils/validations/BasketContext";

const LoginFormNavbar = dynamic(() =>
  import("@/components/templates/LoginFormNavbar/LoginFormNavbar")
);

function Navbar({ token }) {
  const { isAuthenticated } = useAuth();
  const { isBasketOpen, closeBasket, toggleBasket, openBasket } = useBaket();
  const [basketLength, setBasketLength] = useState(0);
  const [usersWishlist, setUsersWishList] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const basket = JSON.parse(localStorage.getItem("basket")) || [];
      setBasketLength(basket.length);
    }

    const getUsersWishList = async () => {
      const res = await fetch("/api/products/wishlist");
      const data = await res.json();
      setUsersWishList(data);
    };
    getUsersWishList();
  }, []);

  return (
    <>
      <NavContainer>
        <Link href={'/'}>
          <img
            src={"https://awakedetroit.com/wp-content/uploads/2019/04/cropped-Favicon.png"}
            alt="logo"
            className="w-14"
          />
        </Link>
        <div className="hidden md:flex items-center justify-center gap-x-6">
          <ul className="flex items-center gap-x-6">
            <li>
              <Link href="/" className="text-sm font-bold text-black/85">
                صفحه اصلی
              </Link>
            </li>
            <li>
              <Link href="/category" className="text-sm font-bold text-black/85">
                فروشگاه
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-sm font-bold text-black/85">
                وبلاگ
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className="text-sm font-bold text-black/85">
                تماس با ما
              </Link>
            </li>
            <li>
              <Link href="/about-us" className="text-sm font-bold text-black/85">
                درباره ما
              </Link>
            </li>
            <li>
              <Link href="/rules" className="text-sm font-bold text-black/85">
                قوانین
              </Link>
            </li>
            {isAuthenticated ? (
              <div className="flex relative group">
                <Link href="/p-user" className="flex items-center gap-x-px text-sm font-bold">
                  حساب کاربری
                  <IoIosArrowDown className="ml-1" />
                </Link>
                <div className="invisible transition-all delay-100 absolute group-hover:visible top-2 right-10 group-hover:top-3 pt-10">
                  <div className="flex flex-col gap-y-4 bg-white rounded shadow-lg p-2 w-48 border-b-4 border-amber-950">
                    <Link href="/p-user/orders">سفارشات</Link>
                    <Link href="/p-user/tickets">تیکت های پشتیبانی</Link>
                    <Link href="/p-user/comments">کامنت‌ها</Link>
                    <Link href="/p-user/wishlist">علاقه‌مندی‌ها</Link>
                    <Link href="/p-user/account-details">جزئیات اکانت</Link>
                  </div>
                </div>
              </div>
            ) : (
              <li className="relative group">
                <Link href="/login-register" className="flex items-center justify-center transition-all gap-x-1 text-sm font-bold text-black/85 group-hover:text-gray-500 border border-gray-300 rounded-3xl px-4 py-3">
                  <LuUser2 className="text-xl" />
                  ورود / عضویت
                </Link>
                <LoginFormNavbar />
              </li>
            )}
          </ul>
        </div>
        <div className="flex items-center justify-center gap-x-6">
          <div className="relative flex cursor-pointer">
            <Link href={"/wishlist"}>
              <FaRegHeart className="text-xl" />
            </Link>
            {usersWishlist.length > 0 && (
              <span className="absolute -top-3 -left-2 p-2 bg-blue-500 text-sm rounded-full w-4 h-4 flex items-center justify-center text-white">
                {usersWishlist.length}
              </span>
            )}
          </div>
          <div className="relative flex cursor-pointer" onClick={openBasket}>
            <FaCartShopping className="text-xl" />
            {basketLength > 0 && (
              <span className="absolute -top-3 -left-2 p-2 bg-blue-500 text-sm rounded-full w-4 h-4 flex items-center justify-center text-white">
                {basketLength}
              </span>
            )}
          </div>
        </div>
      </NavContainer>
      <Basket isBasketOpen={isBasketOpen} onClose={closeBasket} />
    </>
  );
}

export const NavContainer = ({ children }) => {
  const [fixTop, setFixTop] = React.useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setFixTop(true);
    } else {
      setFixTop(false);
    }
  };
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav className={`mx-auto z-50 ${!fixTop ? "relative mt-4 max-w-7xl" : "fixed left-0 right-0 top-0 w-full mt-0"} z-30 bg-white rounded shadow-lg flex items-center justify-center gap-x-36 p-4`}>
      {children}
    </nav>
  );
};

export default Navbar;