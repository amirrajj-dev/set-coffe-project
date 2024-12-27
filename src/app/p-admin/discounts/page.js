import AdminPannelLayout from "@/components/layouts/AdminPannelLayout";
import AddDiscountForm from "@/components/templates/p-admin/AddDiscountForm";
import DiscountsTable from "@/components/templates/p-admin/DiscountsTable";
import connectToDb from "@/utils/db/db";
import discountsModel from "@/utils/db/models/discount";
import productsModel from "@/utils/db/models/product";
import ticketsModel from "@/utils/db/models/ticket";
import React from "react";

async function Discounts() {
    connectToDb()
    const discounts = await discountsModel.find({}).sort({_id : -1}) //the last one which created shows in top
    const products = await productsModel.find({} , 'title')
    
  return (
    <AdminPannelLayout>
      <div className="m-20">
        <h1 className="font-Shabnam-medium text-2xl">افزودن کد تخفیف جدید</h1>
        <AddDiscountForm products={JSON.parse(JSON.stringify(products))} />
        <h1 className="relative text-slate-950 text-3xl font-Shabnam-medium before:content-[''] before:absolute before:top-1/2 before:right-60 before:w-4/5 before:border-t-2 before:border-slate-900 after:content-[''] after:absolute after:top-1/2 after:-right-[340px] after:w-1/3 after:border-t-2 after:border-slate-900">
          لیست تخفیف ها
        </h1>
        {discounts.length > 0 ? (
          <DiscountsTable discounts={JSON.parse(JSON.stringify(discounts))}/>
        ) : (
          <p className="text-center text-slate-950 text-xl mt-6">هنوز تخفیفی ثبت نشده است.</p>
        )}
      </div>
    </AdminPannelLayout>
  );
}

export default Discounts;
