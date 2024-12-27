import React from "react";
import SideBar from "../templates/p-admin/SideBar";
import TopBar from "../modules/TopBar/TopBar";
import { authUser } from "@/utils/validations/auth";
import { redirect } from "next/navigation";

const AdminPannelLayout = async ({ children }) => {
  const user = await authUser()
  
  if (user?.role !== 'admin'){
    return redirect('/')
  }
  return (
    <>
      <SideBar/>
      <TopBar />
      <div className="mr-96 mt-16">{children}</div>
    </>
  );
};

export default AdminPannelLayout;
