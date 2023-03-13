import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router";
import AdminHomePage from "../components/admin/AdminHomePage";
import Admin from "../components/admin/Admin";
import ProtectedRoute from "./ProtectedRoute";
import Ss from "../components/Ss";
import AdminLayouts from "../components/admin/AdminLayouts";
import "../css/admin.css";
import AdminBetTicker from "../components/admin/AdminBetTicker";
import AdminBlockMarket from "../components/admin/AdminBlockMarket";
import AdminMemberListing from "../components/admin/AdminMemberListing";
import AdminNetExposure from "../components/admin/AdminNetExposure";
import AdminPositionTakingListing from "../components/admin/AdminPositionTakingListing";
import AdminTransfer from "../components/admin/AdminTransfer";
import AgencyManagement from "../components/admin/AgencyManagement";
import Balance from "./../components/admin/account/Balance";

export default function AdminRoutes() {
  const { adminLogin } = useSelector((state) => state.auth);
  return (
    <>
      <Routes>
        <Route exact path="/admin" element={!adminLogin && <Admin />} />
      </Routes>
      <AdminLayouts>
        <Routes>
          <Route
            exact
            path="/admin"
            element={adminLogin ? <AdminHomePage /> : <Admin />}
          />
          <Route element={<ProtectedRoute login={adminLogin} />}>
            <Route
              path="/admin/member-listing"
              element={<AdminMemberListing />}
            />
            <Route path="/admin/bet-ticker" element={<AdminBetTicker />} />
            <Route path="/admin/block-market" element={<AdminBlockMarket />} />
            <Route path="/admin/net-exposure" element={<AdminNetExposure />} />
            <Route path="/admin/transfer" element={<AdminTransfer />} />
            <Route path="/admin/account/balance" element={<Balance />} />
            <Route
              path="/admin/position-taking-listing"
              element={<AdminPositionTakingListing />}
            />
          </Route>
        </Routes>
      </AdminLayouts>
    </>
  );
}
