import React from "react";
import SideBar from "../templates/p-user/SideBar";
import TopBar from "../modules/TopBar/TopBar";

const UserPannelLayout = ({ children }) => {
  return (
    <>
      <SideBar />
      <TopBar />
      <div className="mr-96 mt-16">{children}</div>
    </>
  );
};

export default UserPannelLayout;
