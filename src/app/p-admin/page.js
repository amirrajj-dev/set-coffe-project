import AdminPannelLayout from "@/components/layouts/AdminPannelLayout";
import BoxInfo from "@/components/modules/BoxInfo/BoxInfo";
import React from "react";
import { IoTicketSharp } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import usersModel from "@/utils/db/models/user";
import connectToDb from "@/utils/db/db";
import ticketsModel from "@/utils/db/models/ticket";
import productsModel from "@/utils/db/models/product";
import { BiDetail } from "react-icons/bi";
import dynamic from "next/dynamic";
const SaleChart = dynamic(()=>import('@/components/templates/p-admin/SaleChart'),{
  loading : ()=><h3>Loading ...</h3>
})
const GrowthChart = dynamic(()=>import('@/components/templates/p-admin/GrowthChart'),{
  loading : ()=><h3>Loading ...</h3>
})
async function AdminPannel() {
  connectToDb();
  const users = await usersModel.find({});
  const tickets = await ticketsModel.find({});
  const products = await productsModel.find({});
  return (
    <AdminPannelLayout>
      <div className="max-w-6xl mx-12 my-20">
        <div className="grid grid-cols-3 justify-center items-center w-full gap-8">
          <BoxInfo
            title={"تیکت های دریافتی"}
            icon={<IoTicketSharp />}
            amount={tickets.length}
          />
          <BoxInfo
            title={"محصولات سایت"}
            icon={<FaShoppingCart />}
            amount={products.length}
          />
          <BoxInfo title={"سفارشات"} icon={<BiDetail />} amount={6} />
          <BoxInfo
            title={"کاربرهای سایت"}
            icon={<FaUsers />}
            amount={users.length}
          />
        </div>
        <div className="grid grid-cols-2  w-full gap-x-6 mt-8">
          <div className="">
            <h2 className="p-4 bg-gradient-to-r from-amber-950 via-amber-900 to-amber-800 text-white w-full rounded shadow">آمار فروش</h2>
            <SaleChart/>
          </div>
          <div className="">
            <h2 className="p-4 bg-gradient-to-r from-amber-950 via-amber-900 to-amber-800 text-white w-full rounded shadow">نرخ رشد</h2>
            <GrowthChart/>
          </div>
        </div>
      </div>
    </AdminPannelLayout>
  );
}

export default AdminPannel;
