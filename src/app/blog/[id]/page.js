import BreadCrumb from "@/components/modules/BreadCrumb/BreadCrumb";
import Navbar from "@/components/modules/Navbar/Navbar";
import connectToDb from "@/utils/db/db";
import blogsModel from "@/utils/db/models/blog";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import Link from "next/link";
import CommentBox from "@/components/templates/blog/CommentBox";
import commentsModel from "@/utils/db/models/comment";
import Comment from "@/components/templates/blog/Comment";

async function MainBlog({ params }) {
  connectToDb();
  const { id } = params;
  const blog = await blogsModel.findById({ _id: id }).lean();
  const comments = await commentsModel.find({ blogId: id , isAccept : true }).sort({
    createdAt: -1,
  }).lean()
  

  return (
    <>
      <Navbar />
      <BreadCrumb route={"وبلاگ"} />
      <div className={"max-w-7xl mx-auto my-12"}>
        <div className="flex flex-col gap-y-5 items-center justify-center">
          <span className="bg-amber-950 font-Shabnam-medium py-1 px-2 text-white rounded">
            قهوه
          </span>
          <h2 className="text-4xl font-Shabnam-medium mb-2 text-gray-800">
            {blog.title}
          </h2>
          <div className="flex items-center justify-center gap-x-1 text-gray-400 text-xs">
            <span>نویسنده</span>
            <img
              src="https://secure.gravatar.com/avatar/665a1a4dc7cc052eaa938253ef413a78?s=32&d=mm&r=g"
              className="rounded-full w-7 h-7"
            />
            <span>Mohebi</span>
          </div>
          <div className="relative">
            <img src={`/blogs/${blog.image}`} alt="" />
            <span className="absolute top-8 -right-52 rotate-45 bg-amber-950/80 text-white rounded px-2 py-1">
              {new Date(blog.createdAt).toLocaleDateString("fa-IR")}
            </span>
          </div>
        </div>
        <p className="my-8 text-gray-600 text-justify text-sm leading-9">
          {blog.longDesc}
        </p>
        <div className="flex flex-col items-center justify-center gap-y-3">
          <img
            src="https://set-coffee.com/wp-content/uploads/2024/10/Untitled-1-4.webp"
            alt=""
          />
          <span className="text-gray-500 font-Shabnam-medium text-sm">
            طول عمر با قهوه
          </span>
        </div>
        <h2 className="text-slate-950/90 font-Shabnam-medium text-2xl my-8">
          اعتدال در قهوه لازم است
        </h2>
        <p className="text-gray-600 text-justify text-sm leading-9">
          در حالی که قهوه فواید زیادی برای سلامتی دارد، مهم است که آن را به
          میزان متعادل مصرف کنید. همچنین بهتر است برای جلوگیری از دریافت کالری
          اضافی، میزان شکر و خامه اضافه شده به قهوه را محدود کنید.
        </p>
        <p className="text-gray-600 text-justify text-sm leading-9 my-8">
          مصرف بیش از حد کافئین می‌تواند عوارض جانبی منفی مانند عصبی شدن، اضطراب
          و اختلالات خواب ایجاد کند. برخی افراد که نسبت به کافئین حساسیت بیشتری
          دارند، ممکن است نیاز به محدود کردن مصرف قهوه یا حتی اجتناب کامل از آن
          داشته باشند، زیرا حتی قهوه بدون کافئین هم مقداری کافئین دارد.
        </p>
        <p className="text-gray-600 text-justify text-sm leading-9">
          مصرف بیش از حد کافئین می‌تواند منجر به عوارض جانبی منفی مانند عصبی
          شدن، اضطراب و اختلالات خواب شود. برخی افراد که به کافئین حساسیت
          ویژه‌ای دارند ممکن است نیاز داشته باشند مصرف قهوه خود را محدود کنند یا
          آن را به کلی حذف کنند؛ زیرا حتی قهوه بدون کافئین نیز حاوی کافئین است.
        </p>
        <div className="flex flex-col items-center justify-center gap-y-32 my-8 border-t border-gray-300 pt-4 border-b pb-4">
          <div className="flex items-center justify-center gap-x-1 text-4xl">
            <FaFacebook className="text-blue-600 cursor-pointer" />
            <FaSquareXTwitter className="text-black/90 cursor-pointer" />
            <FaPinterest className="text-red-600 cursor-pointer" />
            <FaLinkedin className="text-blue-800 cursor-pointer" />
            <FaTelegram className="text-blue-400 cursor-pointer" />
          </div>
          <Link href={"/blog"}>
            <BsFillGrid3X3GapFill className="text-4xl text-gray-800" />
          </Link>
        </div>
        <h2 className="text-slate-950/90 font-Shabnam-medium text-2xl my-8">
          دیدگاهتان را بنویسید
        </h2>
        <p className="text-gray-500 text-sm">
          نشانی ایمیل شما منتشر نخواهد شد. بخش‌های موردنیاز علامت‌گذاری شده‌اند
          <span className="text-red-500">*</span>
        </p>
       <CommentBox blogId={JSON.parse(JSON.stringify(blog._id))} />
       <h2 className="m-8 mt-20 text-2xl relative font-Shabnam-medium before:content-[''] before:absolute before:w-4 before:h-4 before:rounded before:bg-amber-950/90 before:top-2 before:-right-5">کامنت ها</h2>
       <div className="flex flex-col gap-y-3 mt-8">
        {comments.map(comment=>(
          <Comment {...comment} />
        ))}
       </div>
      </div>
    </>
  );
}

export default MainBlog;
