import AdminPannelLayout from "@/components/layouts/AdminPannelLayout";
import AddProductFrom from "@/components/templates/p-admin/AddProductFrom";
import ProductsTable from "@/components/templates/p-admin/ProductsTable";
import connectToDb from "@/utils/db/db";
import productsModel from "@/utils/db/models/product";
import React from "react";

async function Products() {
  connectToDb();
    const products = await productsModel.find({}).sort({_id : -1})
  return (
    <AdminPannelLayout>
      <div className="m-20">
        <h1 className="relative text-slate-950 text-3xl font-Shabnam-medium before:content-[''] before:absolute before:top-1/2 before:right-52 before:w-4/5 before:border-t-2 before:border-slate-900 after:content-[''] after:absolute after:top-1/2 after:-right-[340px] after:w-1/3 after:border-t-2 after:border-slate-900">
          لیست محصولات
        </h1>
      </div>
      <ProductsTable
        products={JSON.parse(JSON.stringify(products))}
      />
      <AddProductFrom/>
    </AdminPannelLayout>
  );
}

export default Products;
