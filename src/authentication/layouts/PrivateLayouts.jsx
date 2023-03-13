import React from "react";
import SideList from "./SideList";
import DetailPage from "./DetailPage";
import Footer from "./Footer";
import SideCart from "./SideCart";
import { useState } from "react";
import Header from "./Header/Header";
import PersistentDrawerLeft from "./MobileSideBar";
import PersistentDrawerRight from "./AccountSideBar";
import AccountSideBar from "./AccountSideBar";

import { useDispatch, useSelector } from "react-redux";
import { onChangeAsideActive } from "../../store/features/asideSlice";

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
      <Footer />
    </div>
  );
}
