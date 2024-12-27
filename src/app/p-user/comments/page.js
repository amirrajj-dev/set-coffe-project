import UserPannelLayout from "@/components/layouts/UserPannelLayout";
import connectToDb from "@/utils/db/db";
import commentsModel from "@/utils/db/models/comment";
import usersModel from "@/utils/db/models/user";
import { decodeToken } from "@/utils/validations/auth";
import { cookies } from "next/headers";
import React from "react";
import Tbody from "@/components/templates/p-user/Tbody";

async function page() {
  await connectToDb();
  const token = cookies().get("token")?.value;
  const tokenPayload = decodeToken(token);
  const user = await usersModel.findOne({ name: tokenPayload.name });
  const comments = await commentsModel
    .find({ name: user.username })
    .populate("productId");
  return (
    <UserPannelLayout>
      <div className="m-20">
        <h1 className="relative text-slate-950 text-3xl font-Shabnam-medium before:content-[''] before:absolute before:top-1/2 before:right-36 before:w-4/5 before:border-t-2 before:border-slate-900 after:content-[''] after:absolute after:top-1/2 after:-right-[340px] after:w-1/3 after:border-t-2 after:border-slate-900">
          کامنت ها
        </h1>
        <table className="mt-12 w-full bg-amber-950 rounded-lg overflow-hidden shadow-lg text-center text-white">
          <thead className="bg-amber-800 text-nowrap">
            <tr>
              <th className="p-4">نام کاربری</th>
              <th className="p-4">ایمیل</th>
              <th className="p-4">وضعیت ثبت کامنت</th>
              <th className="p-4">نام محصول</th>
              <th className="p-4">امتیاز شما به محصول</th>
              <th className="p-4">کامنت شما</th>
            </tr>
          </thead>
         <Tbody comments={JSON.parse(JSON.stringify(comments))} />
        </table>
      </div>
    </UserPannelLayout>
  );
}

export default page;
