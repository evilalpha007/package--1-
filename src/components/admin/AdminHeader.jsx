import React, { useState } from "react";

import { Link } from "react-router-dom";
import "../../css/admin.css";
import { useDispatch } from "react-redux";
import HeaderDate from './../utilities/HeaderDate';
import HeaderTime from './../utilities/HeaderTime';
import { onChangeAsideActive } from "../../store/features/asideSlice";

const AdminHeader = () => {
  // const aside = useSelector((state) => state.asideState.aside);
  const dispatch = useDispatch();
  return (
    <div>
      <div className=" header  header_admin">
        <div className="header_block p-3">
          <figure className="text-white d-flex">
            <Link to="/">
              <img src="./legalplay.png" className="image_logo" alt="logo" />
            </Link>
            <div className="date_time d-flex">
              <span className="day fw">
                <HeaderDate />
              </span>
              <span className="date fw">
                <HeaderTime />
              </span>
            </div>

            <div className="login_details font-sm">
              <p>Logged in as (demo)</p>
              <p className="last-login">
                Last logged in: 2022-12-26 11:25:14
                <time type="dateSimpleTime"></time>
              </p>
            </div>
            <div className="logout font-sm d-flex justify-content-evenly">
              <div className="part1 d-flex justify-content-center align-items-baseline">
                <i className="fa-solid fa-gear"></i>
                <div className="dropdown">
                  <p
                    className=" dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Settings
                  </p>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a
                        onClick={() => dispatch(onChangeAsideActive("My Bets"))}
                        className="dropdown-item fsm"
                        href="#"
                      >
                        My Bets
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() =>
                          dispatch(onChangeAsideActive("Betting Profit & Loss"))
                        }
                        className="dropdown-item fsm"
                        href="#"
                      >
                        Betting Profit & Loss
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item fsm" href="#">
                        Account Statement
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item fsm" href="#">
                        Activity Log
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item fsm" href="#">
                        Change Password
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="part2 d-flex justify-content-center align-items-baseline">
                <i className="fa-solid fa-right-from-bracket"></i>
                <p>logout</p>
              </div>
            </div>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;


















