import React, { useState } from "react";
import { Link } from "react-router-dom";

const AdminSidebar = () => {
  const [isOpen, setIsopen] = useState(true);

  const ToggleSidebar = () => {
    isOpen === false ? setIsopen(false) : setIsopen(true);
  };

  const routes = [
    {
      title: "Member Listing",
      to: "admin/member-listing",
    },
    {
      title: "Position Taking Listing",
      to: "/admin/position-taking-listing",
    },
    {
      title: "Transfer",
      to: "/admin/transfer",
    },
    {
      title: "Net Exposer",
      to: "/admin/net-exposure",
    },
    {
      title: "Bet Ticker",
      to: "/admin/bet-ticker",
    },
    {
      title: "Block Market",
      to: "/admin/block-market",
    },
    {
      title: "Balance",
      to: "/admin/account/balance",
    },
  ];
  return (
    <div className="container-fluid mt-3">
      <nav className="navbar hidebar navbar-expand-lg">
        <div className="container-fluid p-2">
          <div className="form-inline ml-auto">
            <div className="btn btn-primary" onClick={ToggleSidebar}>
              <i className="fa fa-bars"></i>
            </div>
          </div>
        </div>
      </nav>
      <div className={`sidebar ${isOpen == true ? "active" : ""}`}>
        <div className="sd-header">
          <h4 className="mb-0">Sidebar Header</h4>
          <div className="btn btn-primary" onClick={ToggleSidebar}>
            <i className="fa fa-times"></i>
          </div>
        </div>
        <div className="sd-body">
          <ul>
            {routes.map((item, i) => {
              return (
                <li key={i}>
                  <Link to={item.to} className="sd-link">
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div
        className={`sidebar-overlay ${isOpen == true ? "active" : ""}`}
        onClick={ToggleSidebar}
      ></div>
    </div>
  );
};

export default AdminSidebar;
