import Image from "next/image";
import Link from "next/link";
import React from "react";

function Commercials() {
  return (
    <>
      <div className="flex flex-col gap-y-16 md:gap-y-28 mt-20 md:mt-40 px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-x-6">
          <div
            className="flex flex-col items-center md:items-start justify-center gap-y-4 self-end text-center md:text-left"
            data-aos="fade-left"
          >
            <p className="text-2xl md:text-4xl text-green-900 font-normal">
              خرید قهوه ، به سبک حرفه ای ها
            </p>
            <p className="text-gray-500 text-xs md:text-sm">
              زیبایی امروز رو با قهوه “ست” کنید
            </p>
            <Link
              href={"/"}
              className="text-xs md:text-sm font-bold border-b border-slate-950 pb-1"
            >
              تماس با ما
            </Link>
            <Image
              width={292}
              height={304}
              src="/images/coffee-image-1.jpg"
              alt="coffee pic"
              className="w-full md:w-auto"
            />
          </div>
          <div className="relative w-full md:w-auto" data-aos="fade-right">
            <Image
              width={680}
              height={500}
              src="/images/clubset1.jpg"
              alt="coffee pic"
              className="w-full md:w-auto"
            />
            <div className="flex flex-col gap-y-4 items-end justify-end absolute bottom-0 left-0 w-full md:w-[420px] h-36 bg-slate-100 pl-4">
              <h2 className="text-2xl md:text-4xl text-green-900 font-bold">
                باشگاه مشتریان ست
              </h2>
              <p className="text-gray-500 text-xs md:text-sm">
                برای مشتریان وفادار قهوه ست
              </p>
              <Link
                href={"/"}
                className="text-xs md:text-sm border-b border-slate-950 pb-1"
              >
                اطلاعات بیشتر
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-x-6">
          <Image
            width={680}
            height={500}
            src="/images/Home32.jpg"
            alt="coffee pic"
            className="w-full md:w-auto"
            data-aos="fade-left"
          />
          <div className="flex flex-col items-start justify-start text-center md:text-left" data-aos="fade-right">
            <img
              src="https://set-coffee.com/wp-content/uploads/2022/04/coffee-svg-2.svg"
              alt="coffee pic"
              className="w-16 md:w-20 mx-auto md:mx-0"
            />
            <h2 className="text-red-900 text-3xl md:text-5xl mt-4 mb-6 font-bold">چرا قهوه ست</h2>
            <p className="text-gray-600 max-w-full md:max-w-[372px] mx-auto md:mx-0">
              برخورداری از تجربه و قدمت کافی و آگاهی از ذایقه مصرف کنندگان
              راهنمای ما در برآورده ساختن نیاز مشتریان قهوه تخصصی (موج سوم) است.
              تجربه ای به قدمت چهار نسل و ارتباط مستمر با مصرف کنندگان قهوه
              ضامن این ویژگیها است.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-start mt-8 gap-2">
              <button className="w-full md:w-28 flex items-center justify-center text-sm font-medium h-10 bg-red-950 text-white">
                بیشتر بخوانید
              </button>
              <button className="w-full md:w-24 flex items-center justify-center text-sm font-medium h-10 bg-slate-100 border-2 border-gray-300">
                فروشگاه
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default React.memo(Commercials);