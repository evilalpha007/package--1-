import "./App.css";
import "font-awesome/css/font-awesome.min.css";
import List from "./components/Private/desktop/List";
import { Routes, Route, Redirect } from "react-router-dom";
import Error from "./components/Error";
import Login from "./components/Login";
import Master from "./components/Master";
import Ss from "./components/Ss";
import SuperMaster from "./components/SuperMaster";
import Agent from "./components/Private/desktop/Agent";
import SubAdmin from "./components/SubAdmin";
import ProtectedRoute from "./authentication/ProtectedRoute";
import { useDispatch, useSelector } from "react-redux";
import AdminRoutes from "./authentication/AdminRoutes";
import MobdileView from "./components/mobile/header/MobdileView";
import { useState, useEffect } from "react";

function App() {
  const { login } = useSelector((state) => state.auth);
  const user = false;
  //   const dispatch = useDispatch();
  //   const data = useSelector(state => state.data);
  // console.log(data);
  const [isMobile, setIsMobile] = useState(
    /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
  );
  useEffect(() => {
    const handleResize = () => {
      const isMobileView = /iPhone|iPad|iPod|Android/i.test(
        navigator.userAgent
      );
      if (isMobileView !== isMobile) {
        window.location.reload();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  return (
    <>
      <AdminRoutes />
      {isMobile || user ? (
        <Routes>
          <Route exact path="/" element={<MobdileView />} />
        </Routes>
      ) : (
        <Routes>
          <Route exact path="/" element={login ? <List /> : <Login />} />
          <Route element={<ProtectedRoute login={false} />}>
            <Route exact path="ss" element={<Ss />} />
            <Route exact path="Master" element={<Master />} />
            <Route exact path="supermaster" element={<SuperMaster />} />
            <Route exact path="subadmin" element={<SubAdmin />} />
            <Route exact path="agent" element={<Agent />} />
            <Route exact path="*" element={<Error />} />
          </Route>
        </Routes>
      )}
    </>
  );
}

export default App;
