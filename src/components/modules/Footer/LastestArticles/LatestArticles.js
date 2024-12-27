import React from "react";

function LatestArticles() {
  return (
    <>
      <div className="flex items-center justify-center gap-x-2 mt-4 border-b border-gray-800 pb-4">
        <img src="https://set-coffee.com/wp-content/uploads/2024/09/The-future-espresso-machine-45x45.webp" alt="" />
        <div className="flex flex-col gap-y-2">
          <span>تاریچه دستگاه اسپرسو ساز</span>
          <div className="flex">
          <span className="text-xs text-gray-500 font-bold">۲۴ شهریور ۱۴۰۳ </span>
          <span className="mr-2 text-xs text-gray-500 font-bold">بدون دیدگاه</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default LatestArticles;
