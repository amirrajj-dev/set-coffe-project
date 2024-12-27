import React from "react";
import { BsFillSignpost2Fill } from "react-icons/bs";
import { IoMdPhonePortrait } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import LatestArticles from "./LastestArticles/LatestArticles";
import Link from "next/link";

function Footer() {
  return (
    <>
      <div className="flex flex-col bg-black/95 brightness-105">
        <div className="text-white py-14 px-32 flex items-start gap-x-20">
          <div className="flex flex-col items-start justify-start gap-y-4 text-sm text-gray-500 font-medium brightness-110">
            <img
              src="https://set-coffee.com/wp-content/uploads/2021/09/logosefid.png"
              alt=""
            />
            <span className="max-w-64">
              شرکت فنجان داغ خوارزمی، فروشگاه اینترنتی قهوه ست
            </span>
            <div className="flex items-center justify-center gap-x-2">
              <BsFillSignpost2Fill className="text-lg" />
              <span className="max-w-64 text-justify">
                تهران. شریف آباد . شهرک صنعتی خوارزمی فاز 2 . بلوار بهارستان.
                خیابان ماگنولیا بلوک آ117
              </span>
            </div>
            <div className="flex items-center justify-center gap-x-2">
              <IoMdPhonePortrait className="text-lg" />
              <a href="tel:02188305827" target="_blank">
                پیگیری سفارشات : 02188305827
              </a>
            </div>
            <div className="flex items-center justify-center gap-x-2">
              <IoMail className="text-lg" />
              <span>support [at] set-coffee.com</span>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start">
            <h3 className="font-bold mb-1">آخرین نوشته ها</h3>
            <LatestArticles />
            <LatestArticles />
            <LatestArticles />
          </div>
          <div className="flex flex-col items-start justify-start">
            <h3 className="font-bold mb-4">دسترسی سریع</h3>
            <ul className="text-sm text-gray-500 font-semibold space-y-4">
              <li>
                <Link href={"/"}>حفظ حریم شخصی</Link>
              </li>
              <li>
                <Link href={"/"}>ثبت شکایات</Link>
              </li>
              <li>
                <Link href={"/"}>درباره ما</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start justify-start">
            <h3 className="font-bold mb-4">منوی فوتر</h3>
            <ul className="text-sm text-gray-500 font-semibold space-y-4">
              <li>
                <Link href={"/"}>شرایط و قوانین</Link>
              </li>
              <li>
                <Link href={"/"}>شرایط و هزینه ارسال</Link>
              </li>
              <li>
                <Link href={"/"}>ثبت شکایات</Link>
              </li>
              <li>
                <Link href={"/"}>حفظ حریم شخصی</Link>
              </li>
              <li>
                <Link href={"/"}>دیکشنری قهوه</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center justify-center gap-1">
            <div className="flex gap-1 mt-10">
              <div className="bg-white w-20 h-20 rounded flex items-center justify-center">
                <img
                  src="https://set-coffee.com/wp-content/uploads/2022/07/logonama.png"
                  className="w-14"
                  alt=""
                />
              </div>
              <div className="bg-white w-20 h-20 rounded flex items-center justify-center">
                <img
                  src="https://set-coffee.com/wp-content/uploads/2022/07/logonama.png"
                  className="w-14"
                  alt=""
                />
              </div>
            </div>
            <div className="flex gap-1">
              <div className="bg-white w-20 h-20 rounded flex items-center justify-center">
                <img
                  src="https://set-coffee.com/wp-content/uploads/2022/07/logonama.png"
                  className="w-14"
                  alt=""
                />
              </div>
              <div className="bg-white w-20 h-20 rounded flex items-center justify-center">
                <img
                  src="https://set-coffee.com/wp-content/uploads/2022/07/logonama.png"
                  className="w-14"
                  alt=""
                />
              </div>
              <div className="bg-white w-20 h-20 rounded flex items-center justify-center">
                <img
                  src="https://set-coffee.com/wp-content/uploads/2022/07/logonama.png"
                  className="w-14"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="text-white text-xs pr-32 p-6 border-t border-gray-800">
          2023 تمام حقوق متعلق است به قهوه ست | طراحی و اجرا نیلامارکتینگ
        </div>
      </div>
    </>
  );
}

export default Footer;
