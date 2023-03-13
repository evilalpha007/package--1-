import React from "react";
// import DetailPage from "./DetailPage";
import { useState } from "react";
import "../../index.css";
import { useDispatch, useSelector } from "react-redux";
import { onChangeAsideActive } from "../../store/features/asideSlice";
import AccountSideBar from "../../components/Private/AccountSideBar";
import PersistentDrawerLeft from "./../../components/Private/MobileSideBar";
import Header from "./../../components/Private/Header/Header";
import SideCart from "./../../components/Private/SideCart";
import SideList from "./../../components/Private/SideList";
import Footer from "../../components/Private/Footer";
import { Link } from "react-router-dom";

export default function PrivateLayouts({ children }) {
  const aside = useSelector((state) => state.asideState.aside);
  const dispatch = useDispatch();
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => {
    setSidebar((prev) => !prev);
  };

  const routes = [
    { name: "LIVE CASINO", path: "/game-list/favorites" },
    { name: "CRICKET", path: "/game-list/cricket" },
    { name: "SOCCER", path: "/game-list/soccer" },
    { name: "TENNIS", path: "/game-list/tennis" },
    { name: "HORSE RACING", path: "/game-list/horse-racing" },
    { name: "GREYHOUND RACING", path: "/game-list/grey-hound-racing" },
  ];

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
          {routes.map(({ name, path }) => (
            <Link to={path} className="hide_dot">
              {name}
            </Link>
          ))}
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
      <Footer />;
    </div>
  );
}
