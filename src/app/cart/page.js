import Footer from "@/components/modules/Footer/Footer";
import Navbar from "@/components/modules/Navbar/Navbar";
import Setter from "@/components/modules/Setter/Setter";
import React from "react";
import CartTable from "@/components/templates/cart/CartTable/CartTable";
import TotalCard from "@/components/templates/cart/TotalCard/TotalCard";
import connectToDb from "@/utils/db/db";
import discountsModel from "@/utils/db/models/discount";
async function Cart() {
  connectToDb();
  const discounts = await discountsModel.find(
    {},
    "code percent maxUsage usage productId"
  );

  return (
    <>
      <Navbar />
      <Setter />
      <div className="max-w-7xl mx-auto" data-aos="fade-up">
        <div className="flex items-start justify-start">
          <div className="w-2/3">
            <CartTable discounts={JSON.parse(JSON.stringify(discounts))} />
          </div>
          <div className="w-1/3">
            <TotalCard />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Cart;
