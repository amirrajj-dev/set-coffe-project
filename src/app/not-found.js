import Link from "next/link";
import React from "react";
import Image from "next/image";

function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-amber-200">
      <Image src="/images/coffe-cup.jpg" width={150} height={150} alt="Coffee Cup" className="rounded shadow-lg" />
      <h1 className="text-6xl font-bold text-brown-900 mt-8">صفحه پیدا نشد</h1>
      <p className="text-brown-600 mt-4 text-center">به نظر می‌رسد قهوه‌ای که به دنبال آن بودید ریخته شده است.</p>
      <Link href="/" className="mt-6 px-6 py-3 bg-amber-950 text-white rounded-md hover:bg-amber-800 transition-colors">
        بازگشت به خانه
      </Link>
    </div>
  );
}

export const metadata = {
  title: 'صفحه پیدا نشد - SET Coffee | فروشگاه اینترنتی قهوه ست'
}

export default NotFound;