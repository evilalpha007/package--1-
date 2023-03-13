import React from "react";
import "../css/admin.css";
import BalanceBar from "../../components/admin/BalanceBar";
import AdminSidebar from "../../components/admin/AdminSidebar";
import { useSelector } from "react-redux";
import AdminHeader from "../../components/admin/AdminHeader";

const AdminLayouts = ({ children }) => {
  const { adminLogin } = useSelector((state) => state.auth);

  return (
    adminLogin && (
      <div className="admin_layouts">
        <AdminHeader />
        <div className="px-3">
          <div className=" mt-5  d-flex ">
            <div className="admin_sidebar container">
              <AdminSidebar />
            </div>
            <div className="main_components">
              <BalanceBar />
              <div className="w-screen h-screen">{children}</div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default AdminLayouts;
