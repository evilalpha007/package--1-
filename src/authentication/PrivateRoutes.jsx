import React from "react";
import { Route, Routes } from "react-router";
import ProtectedRoute from "./ProtectedRoute";
import Login from "../components/Private/Login";
import List from "../components/Private/List";

import { useDispatch, useSelector } from "react-redux";

export default function PrivateRoutes() {
  const { login } = useSelector((state) => state.auth);

  return (
    <Routes>
      <Route exact path="/" element={login ? <List /> : <Login />} />
      <Route element={<ProtectedRoute login={false} />}></Route>
    </Routes>
  );
}
