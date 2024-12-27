import Link from "next/link";
import React from "react";

function BoxInfo({street , address , phone}) {
  return (
    <div className="flex flex-col bg-white items-start p-2 shadow-lg absolute -bottom-20 left-16 z-40 rounded">
      <h3 className="text-gray-500 text-sm mb-2">فروشگاه ما</h3>
      <h2 className="font-Shabnam-medium text-2xl">
        آدرس فروشگاه حضوری قهوه ست ({street})
      </h2>
      <span className="text-gray-500 text-sm my-2">
        {address}
      </span>
      <span className="text-sm text-gray-500 font-Shabnam-medium mb-2">021-66726563</span>
      <Link href={'/about-us'} className="border-b border-gray-300 text-sm font-Shabnam-medium">درباره فروشگاه</Link>
    </div>
  );
}

export default BoxInfo;
