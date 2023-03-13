import "./App.css";
import "font-awesome/css/font-awesome.min.css";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AdminRoutes from "./authentication/AdminRoutes";
import MobdileView from "./components/mobile/header/MobdileView";
import { useState, useEffect } from "react";
import PrivateRoutes from "./authentication/PrivateRoutes";

function App() {
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
        <PrivateRoutes />
      )}
    </>
  );
}

export default App;
