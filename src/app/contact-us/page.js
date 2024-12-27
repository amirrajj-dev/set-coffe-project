import BreadCrumb from "@/components/modules/BreadCrumb/BreadCrumb";
import Footer from "@/components/modules/Footer/Footer";
import Navbar from "@/components/modules/Navbar/Navbar";
import React from "react";
import { IoMail } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";
import { BiSolidContact } from "react-icons/bi";
import { BsBrowserChrome } from "react-icons/bs";
import { FaCoffee } from "react-icons/fa";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { cookies } from "next/headers";
import dynamic from "next/dynamic";
import Map from "@/components/templates/contact-us/Map";
import BoxInfo from "@/components/templates/contact-us/BoxInfo";
const ContactUsForm = dynamic(
  () => import("@/components/templates/contact-us/ContactUsForm"),
  {
    loading: () => <p>...Loading</p>,
  }
);

function ContactUs() {
  const token = cookies().get("token");
  return (
    <>
      <Navbar token={token?.value ? true : false} />
      <BreadCrumb route={"تماس با ما"} />
      <div className="max-w-7xl mx-auto my-8">
        <div className="flex items-center justify-center mx-auto gap-x-4 mb-12">
          <Map
            position={[35.72021225108499, 51.42222691580869]}
            center={[35.72021225108499, 51.42222691580869]}
          >
            <BoxInfo street={'انقلاب'} address={'تهران - خ انقلاب بین میدان فردوسی و چهار راه کالج روبروی خ ویلا شماره ۸۵۲'} phone={'021-66726563'}/>
          </Map>
          <Map
            position={[35.70153474690238, 51.41497422314844]}
            center={[35.70153474690238, 51.41497422314844]}
          >
            <BoxInfo street={'شعبه جم'} address={'تهران – خ کریمخان زند – خ قائم مقام فراهانی – ابتدای خ فجر(جم) – شماره ۱۰'} phone={'021-88305827'}/>
          </Map>
        </div>
        <div className="flex items-start mt-32">
          <div className="shadow-xl p-4">
            <h2 className="text-gray-500 text-base">تماس با ما</h2>
            <h3 className="text-2xl font-Shabnam-medium my-6">اطلاعات تماس</h3>
            <div className="flex flex-col gap-y-6">
              <div className="flex items-center gap-x-4">
                <FaCoffee className="text-gray-700 text-3xl" />
                <span className="text-gray-500 text-lg">
                  شرکت فنجان داغ خوارزمی (کارخانه قهوه ست )
                </span>
              </div>
              <div className="flex items-center gap-x-4">
                <Link href={"/"}>
                  <BsBrowserChrome className="text-gray-700 text-3xl" />
                </Link>
                <span className="text-gray-500 text-lg">set-coffee.com</span>
              </div>
              <div className="flex items-center gap-x-4">
                <BiSolidContact className="text-gray-700 text-3xl" />
                <span className="text-gray-500 text-lg">
                  تهران. پاکدشت . شهرک صنعتی خوارزمی. فاز 2 . بلوار بهارستان.
                  خیابان ماگنولیا بلوک آ117
                </span>
              </div>
              <div className="flex items-center gap-x-4">
                <a href="tel:021-36479228">
                  <FaPhone className="text-gray-700 text-3xl" />
                </a>
                <span className="text-gray-500 text-lg">021-36479228</span>
              </div>
              <div className="flex items-center gap-x-4">
                <a href="mailto:coffee[at]set-coffee.com">
                  <IoMail className="text-gray-700 text-3xl" />
                </a>
                <span className="text-gray-500 text-lg">
                  coffee[at]set-coffee.com
                </span>
              </div>
              <div className="flex items-center gap-x-4">
                <a href="mailto:whole[at]set-coffee.com">
                  <IoMail className="text-gray-700 text-3xl" />
                </a>
                <span className="text-gray-500 text-lg">
                  whole[at]set-coffee.com
                </span>
              </div>
              <div className="flex items-center gap-x-4">
                <a href="https://wa.me/09366726563">
                  <FaWhatsapp className="text-gray-700 text-3xl" />
                </a>
                <span className="text-gray-500 text-lg">
                  تماس با مدیریت از طریق واتساپ و یا تلگرام : 09366726563
                </span>
              </div>
            </div>
          </div>
          <div className="p-4">
            <h2 className="text-gray-500 text-base">فرم تماس با ما</h2>
            <h3 className="text-2xl font-Shabnam-medium my-6">
              برای تماس با ما می توانید فرم زیر را تکمیل کنید
            </h3>
            <ContactUsForm />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ContactUs;
