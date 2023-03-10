import React from "react";
import Sidebar from "./Sidebar";

const AccountSideBar = ({openSidebar,sidebar , closeSidebar}) => {

  return (
    <div className=" navbar tool-bar ">
      <div className="burger" onClick={openSidebar} >
      <div className="accountbox d-flex justify-content-center align-items-center flex-column">
      <i className="fa-solid fa-user"></i>
      <span>2390</span>
      </div>
      </div>
      <Sidebar sidebar={sidebar}  closeSidebar={closeSidebar}/>
    </div>
  );
};

export default AccountSideBar;

