import React from "react";
import { Link } from "react-router-dom";
import "../../css/header.css";
import Login from "./Login";
import SideBar from "./SideBar";

export default function Header() {
  const [showModal, setShowModal] = React.useState(true);
  const header = [
    {
      name: "Sports Book",
      to: "/sports-book",
    },
    {
      name: "Sports Book",
      to: "/InPlayScreen",
    },
    {
      name: "Sports Book",
      to: "/bonuses",
    },
    {
      name: "Sports Book",
      to: "#",
    },
    {
      name: "Sports Book",
      to: "#",
    },
  ];
  return (
    <div className="header justify-between bg-transparent z-10 text-white">
      <div className="flex items-center gap-2">
        <SideBar />
        <h1>LEGAL PLAY</h1>
        {/* <img src='image/mobile.3edfdb71.svg' alt='' className='h-[30px]' />*/}
        <ul className="hidden gap-8 mx-8 2xl:flex">
          {header.map((ele, i) => {
            return (
              <li key={i}>
                <Link
                  to={ele.to}
                  href={ele.address}
                  className="font-bold relative item"
                >
                  {ele.name}
                </Link>
              </li>
            );
          })}
        </ul>
        {/* <div className='text-xl'>DSR GAMES</div> */}
      </div>
      <div className="flex gap-2 items-center">
        <div className="flex p-2 border border-yellow-300 rounded-full mobile_btn">
          <span className="material-symbols-rounded">smartphone</span>
        </div>
        <div onClick={() => setShowModal(true)} className="p-2 cursor-pointer">
          Login
        </div>
        {showModal ? (
          <>
            <Login showModal={showModal} setShowModal={setShowModal} />
          </>
        ) : null}
        <div className=" cursor-pointer bg-yellow-300 p-2 rounded-full px-4 text-black font-semibold">
          Sign up
        </div>
      </div>
    </div>
  );
}
