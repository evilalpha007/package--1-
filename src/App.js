import "./App.css";
import "font-awesome/css/font-awesome.min.css";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AdminRoutes from "./authentication/AdminRoutes";
import MobileView from "./components/mobile/header/MobileView";
import { useState, useEffect } from "react";
import PrivateRoutes from "./authentication/PrivateRoutes";

function App() {
  const user = false;
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
          <Route exact path="/" element={<MobileView />} />
        </Routes>
      ) : (
        <PrivateRoutes />
      )}
      <Routes>
        <Route exact path="/ss" element={<Ss />} />
        <Route exact path="/Master" element={<Master />} />
        <Route exact path="/supermaster" element={<SuperMaster />} />
        <Route exact path="/subadmin" element={<SubAdmin />} />
        <Route exact path="/agent" element={<Agent />} />
        <Route exact path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
