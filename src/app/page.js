import Banner from "@/components/templates/index/Banner/Banner";
import LatestProducts from "@/components/templates/index/LatestProducts/LatestProducts";
import Commercials from "@/components/templates/index/Commercials/Commercials";
import Articles from "@/components/templates/index/Articles/Articles";
import Footer from "@/components/modules/Footer/Footer";
import ScrollToTop from "@/components/modules/ScrollToTop/ScrollToTop";
import { cookies } from "next/headers";
import { getToken } from "@/utils/validations/auth";
import dynamic from "next/dynamic";
import blogsModel from "@/utils/db/models/blog";
import connectToDb from "@/utils/db/db";
const Navbar = dynamic(()=>import("@/components/modules/Navbar/Navbar") , {
  loading : ()=>{
    return <div>Loading...</div>
  }
})
export default async function Home() {
  await connectToDb()
  const blogs = await blogsModel.find({}).lean()
  
  return (
    <>
      <Navbar/>
      <Banner />
        <ScrollToTop/>
      <div className="max-w-7xl mx-auto -mt-20">
        <LatestProducts />
        <Commercials />
        <Articles blogs={blogs}/>
      </div>
        <Footer/>
    </>
  );
}
