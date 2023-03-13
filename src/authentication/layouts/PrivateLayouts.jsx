import React from "react";
// import DetailPage from "./DetailPage";
import { useState } from "react";
import "../../index.css"
import { useDispatch, useSelector } from "react-redux";
import { onChangeAsideActive } from "../../store/features/asideSlice";
import AccountSideBar from "../../components/Private/AccountSideBar";
import PersistentDrawerLeft from "./../../components/Private/MobileSideBar";
import Header from "./../../components/Private/Header/Header";
import SideCart from "./../../components/Private/SideCart";
import Footer from "./../../components/Private/user/Footer";
import SideList from "./../../components/Private/SideList";

export default function PrivateLayouts({ children }) {
  const aside = useSelector((state) => state.asideState.aside);
  const dispatch = useDispatch();
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => {
    setSidebar((prev) => !prev);
  };

  return (
    <div>
      <PersistentDrawerLeft />
      <AccountSideBar
        openSidebar={toggleSidebar}
        sidebar={sidebar}
        closeSidebar={toggleSidebar}
      />
      <Header />
      <div className="container">
        <div className="navItems  d-flex">
          <li
            className="hide_dot"
            onClick={() => dispatch(onChangeAsideActive("LiveCasino"))}
          >
            LIVE CASINO
          </li>
          <li className="hide_dot">ELECTION</li>
          <li className="hide_dot">TWENTY20BIGBASH🏆</li>
          <li onClick={() => dispatch(onChangeAsideActive("Cricket"))}>
            CRICKET
          </li>
          <li onClick={() => dispatch(onChangeAsideActive("Soccer"))}>
            SOCCER
          </li>
          <li onClick={() => dispatch(onChangeAsideActive("Tennis"))}>
            TENNIS
          </li>
          <li>KABADI</li>
          <li>ELECTION</li>
          <li onClick={() => dispatch(onChangeAsideActive("Horse Racing"))}>
            HORSE RACING
          </li>
          <li onClick={() => dispatch(onChangeAsideActive("Greyhound Racing"))}>
            GREYHOUND RACING
          </li>
        </div>
      </div>
      <hr />
      <div className="container">
        <div className="row">
          <div className="col col-lg-2">
            <SideList />
          </div>
          <div className="col-lg-7 col ">{children}</div>
          <div className="col col-lg-3">
            <SideCart />
          </div>
        </div>
      </div>
      </div>
      );
    }
    
    // <Footer />