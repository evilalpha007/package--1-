import { Login } from "@mui/icons-material";
import { List } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router";
import Agent from "../components/Private/Agent";
import Error from "../components/Private/Error";
import Master from "../components/Private/Master";
import Ss from "../components/Private/Ss";
import SubAdmin from "../components/Private/SubAdmin";
import SuperMaster from "../components/Private/SuperMaster";
import ProtectedRoute from "./ProtectedRoute";
import { useDispatch, useSelector } from "react-redux";

export default function PrivateRoutes() {
  const { login } = useSelector((state) => state.auth);

  return (
    <Routes>
      <Route exact path="/" element={login ? <List /> : <Login />} />
      <Route element={<ProtectedRoute login={false} />}>
        <Route exact path="/ss" element={<Ss />} />
        <Route exact path="/Master" element={<Master />} />
        <Route exact path="/supermaster" element={<SuperMaster />} />
        <Route exact path="/subadmin" element={<SubAdmin />} />
        <Route exact path="/agent" element={<Agent />} />
        <Route exact path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}
