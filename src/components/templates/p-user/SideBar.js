"use client";
import React, { useEffect, useState } from "react";
import { BiSolidDetail } from "react-icons/bi";
import { FaHeart, FaComments, FaShoppingCart } from "react-icons/fa";
import { IoTicketSharp } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
import { VscSignOut } from "react-icons/vsc";
import Link from "next/link";
import { useAuth } from "@/utils/validations/AuthContext";
import { MdAdminPanelSettings } from "react-icons/md";

function SideBar() {
  const { handleLogOut } = useAuth();
  const [user, setUser] = useState(null);

  const logOut = () => {
    const areYouSure = confirm("آیا مطمعن هستید؟");
    if (areYouSure) {
      handleLogOut();
    }
  };

  useEffect(() => {
    const getUser = async () => {
      const res = await fetch("/api/auth/me");
      const data = await res.json();
      setUser(data);
    };
    getUser();
  }, []);

  return (
    <>
      <div className="fixed top-0 right-0 bottom-0 w-80 lg:w-96 bg-gradient-to-r from-amber-950 via-amber-900 to-amber-800 text-white z-50 shadow-2xl overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center gap-4 mb-6">
            <img
              src={
                user?.avatar ||
                "https://secure.gravatar.com/avatar/c40cf6d800030060b86f8060a8380ebf?s=96&d=mm&r=g"
              }
              alt="User Avatar"
              className="w-16 h-16 rounded-full border-4 border-white shadow-lg"
            />
            <h2 className="text-3xl font-bold">
              خوش اومدی {user?.username} عزیز
            </h2>
          </div>
          <div className="border-b border-white mb-6"></div>
          <div className="flex flex-col gap-y-6 text-white">
            <Link
              href={"/p-user"}
              className="flex items-center gap-x-4 text-lg hover:bg-amber-700 hover:shadow-xl transition-all duration-300 p-3 rounded-lg"
            >
              <MdSpaceDashboard className="text-3xl" />
              <span>پیشخوان</span>
            </Link>
            <Link
              href={"/"}
              className="flex items-center gap-x-4 text-lg hover:bg-amber-700 hover:shadow-xl transition-all duration-300 p-3 rounded-lg"
            >
              <FaShoppingCart className="text-3xl" />
              <span>سفارش ها</span>
            </Link>
            <Link
              href={"/p-user/tickets"}
              className="flex items-center gap-x-4 text-lg hover:bg-amber-700 hover:shadow-xl transition-all duration-300 p-3 rounded-lg"
            >
              <IoTicketSharp className="text-3xl" />
              <span>تیکت های پشتیبانی</span>
            </Link>
            <Link
              href={"/p-user/comments"}
              className="flex items-center gap-x-4 text-lg hover:bg-amber-700 hover:shadow-xl transition-all duration-300 p-3 rounded-lg"
            >
              <FaComments className="text-3xl" />
              <span>کامنت ها</span>
            </Link>
            <Link
              href={"/p-user/wishlist"}
              className="flex items-center gap-x-4 text-lg hover:bg-amber-700 hover:shadow-xl transition-all duration-300 p-3 rounded-lg"
            >
              <FaHeart className="text-3xl" />
              <span>علاقه مندی</span>
            </Link>
            <Link
              href={"/p-user/account-details"}
              className="flex items-center gap-x-4 text-lg hover:bg-amber-700 hover:shadow-xl transition-all duration-300 p-3 rounded-lg"
            >
              <BiSolidDetail className="text-3xl" />
              <span>جزعیات اکانت</span>
            </Link>
            {user?.role === "admin" && (
              <Link
                href={"/p-admin"}
                className="flex items-center gap-x-4 text-lg hover:bg-amber-700 hover:shadow-xl transition-all duration-300 p-3 rounded-lg"
              >
                <MdAdminPanelSettings className="text-3xl" />
                <span>پنل ادمین</span>
              </Link>
            )}
            <button
              onClick={logOut}
              className="flex items-center gap-x-4 text-lg hover:bg-amber-700 hover:shadow-xl transition-all duration-300 p-3 rounded-lg"
            >
              <VscSignOut className="text-3xl" />
              <span>خروج از حساب کاربری</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideBar;
