import BreadCrumb from "@/components/modules/BreadCrumb/BreadCrumb";
import Footer from "@/components/modules/Footer/Footer";
import Navbar from "@/components/modules/Navbar/Navbar";
import BlogBox from "@/components/templates/blog/BlogBox";
import connectToDb from "@/utils/db/db";
import blogsModel from "@/utils/db/models/blog";
import dynamic from "next/dynamic";
import React from "react";
async function Blog() {
  connectToDb()
  const blogs = await blogsModel.find({}).sort({_id : -1}).lean()
  
  return (
    <>
      <Navbar />
      <BreadCrumb route={'وبلاگ'} />
      <div className={'max-w-7xl mx-auto my-12'}>
        <div className="grid grid-cols-3 gap-4">
          {blogs.map(blog=>(
            <BlogBox key={blog._id} {...blog} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Blog;
