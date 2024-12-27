import AdminPannelLayout from '@/components/layouts/AdminPannelLayout'
import AddArticleForm from '@/components/templates/p-admin/AddArticleForm'
import BlogsTable from '@/components/templates/p-admin/BlogsTable'
import blogsModel from '@/utils/db/models/blog'
import productsModel from '@/utils/db/models/product'
import React from 'react'

export default async function page() {
    const products = await productsModel.find({})
    const  blogs = await blogsModel.find({})
  return (
    <AdminPannelLayout>
         <div className="m-20">
        <h1 className="relative text-slate-950 text-3xl font-Shabnam-medium before:content-[''] before:absolute before:top-1/2 before:right-52 before:w-4/5 before:border-t-2 before:border-slate-900 after:content-[''] after:absolute after:top-1/2 after:-right-[340px] after:w-1/3 after:border-t-2 after:border-slate-900">
          لیست مقالات
        </h1>
      </div>
      <BlogsTable products={JSON.parse(JSON.stringify(products))}  blogs={JSON.parse(JSON.stringify(blogs))} />
      <AddArticleForm/>
    </AdminPannelLayout>
  )
}