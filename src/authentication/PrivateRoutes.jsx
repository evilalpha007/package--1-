import React from "react";
import { Route, Routes } from "react-router";
import ProtectedRoute from "./ProtectedRoute";
import Login from "../components/Private/Login";
import List from "../components/Private/List";

import { useSelector } from "react-redux";
import PrivateLayouts from "./layouts/PrivateLayouts";

export default function PrivateRoutes() {
  const { login } = useSelector((state) => state.auth);

  return (
    <>
      <Routes>
        <Route exact path="/" element={!login && <Login />} />
      </Routes>
      <PrivateLayouts>
        <Routes>
          <Route element={<ProtectedRoute login={false} />}>
            <Route exact path="/" element={<List />} />
          </Route>
        </Routes>
      </PrivateLayouts>
    </>
  );
}
