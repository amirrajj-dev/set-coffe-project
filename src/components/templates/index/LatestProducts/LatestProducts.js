import connectToDb from "@/utils/db/db";
import productsModel from "@/utils/db/models/product";
import React, { Suspense } from "react";
import { IoIosArrowBack } from "react-icons/io";

const CoffeBox = React.lazy(() =>
  import("@/components/modules/CoffeBox/CoffeBox")
);

async function LatestProducts() {
  connectToDb();
  const products = await productsModel.find({}).sort({ _id: -1 }).limit(10).lean();

  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between mb-4">
        <div className="flex flex-col items-center justify-center gap-y-3">
          <h2 className="text-green-900 text-2xl md:text-3xl">آخرین محصولات</h2>
          <p className="text-gray-500 text-ltr text-sm md:text-base">
            <span>Latest Products</span>
          </p>
        </div>
        <button className="text-amber-950 text-lg md:text-xl flex items-center w-36 md:w-44 justify-center gap-x-3 transition-all hover:h-12 hover:text-amber-800 hover:rounded-full mt-4 md:mt-0">
          مشاهده همه
          <IoIosArrowBack />
        </button>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 lg:gap-8" data-aos="fade-up">
          {products.map(product => (
            <CoffeBox key={product._id} {...product} />
          ))}
        </div>
      </Suspense>
    </>
  );
}

export default React.memo(LatestProducts);