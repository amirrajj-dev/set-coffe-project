import AdminPannelLayout from "@/components/layouts/AdminPannelLayout";
import CommentsTable from "@/components/templates/p-admin/CommentsTable";
import BlogCommentsTable from "@/components/templates/p-admin/BlogCommentsTable";
import connectToDb from "@/utils/db/db";
import commentsModel from "@/utils/db/models/comment";
import ticketsModel from "@/utils/db/models/ticket";
import React from "react";

async function Comments() {
    connectToDb()
    const tickets = await ticketsModel.find({}).populate('subDepartment user')
    const productComments = await commentsModel.find({
      adminAnswer : {$exists : false}, //commetns that dont have adminanswer field
      blogId : null
    }).populate('productId')
    const BlogComments = await commentsModel.find({
      productId : null
    }).populate('blogId')
    
  return (
    <AdminPannelLayout>
      <div className="m-20">
        <h1 className="relative text-slate-950 text-3xl font-Shabnam-medium before:content-['']  before:top-1/2 before:right-52 before:w-4/5 before:border-t-2 before:border-slate-900 after:content-[''] after:absolute after:top-1/2 after:-right-[340px] after:w-1/3 after:border-t-2 after:border-slate-900">
          لیست کامنت ها
        </h1>
      </div>
      <h2 className="m-8 text-2xl relative font-Shabnam-medium before:content-[''] before:absolute before:w-4 before:h-4 before:rounded before:bg-blue-600 before:top-2 before:-right-5">کامنت های مربوط به محصولات</h2>
      <CommentsTable comments={JSON.parse(JSON.stringify(productComments))}/>
      <h2 className="m-8 mt-20 text-2xl relative font-Shabnam-medium before:content-[''] before:absolute before:w-4 before:h-4 before:rounded before:bg-blue-600 before:top-2 before:-right-5">کامنت های مربوط به محصولات</h2>
      <BlogCommentsTable comments={JSON.parse(JSON.stringify(BlogComments))}/>
    </AdminPannelLayout>
  );
}

export default Comments;