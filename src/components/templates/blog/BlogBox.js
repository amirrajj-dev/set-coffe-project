import Image from "next/image";
import Link from "next/link";
import React from "react";

function BlogBox({ title, shortDesc, image , _id }) {
    
  return (
    <div className="flex flex-col items-start bg-white shadow-md rounded-lg overflow-hidden">
      <div className="relative w-full h-64 overflow-hidden">
        <Image
          src={`/blogs/${image}`}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="hover:scale-105 transition-transform duration-300 ease-in-out"
        />
      </div>
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-2 text-gray-800">{title}</h2>
        <p className="text-base text-gray-600 line-clamp-3 text-justify mb-4">
          {shortDesc}
        </p>
        <Link className="text-sm text-teal-600 hover:text-teal-800 font-semibold transition-colors duration-300" href={`/blog/${_id}`}>
          ادامه مطلب
        </Link>
      </div>
    </div>
  );
}

export default BlogBox;