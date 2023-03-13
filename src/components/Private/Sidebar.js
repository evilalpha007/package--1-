import React from "react";
import List from "@mui/material/List";
import { useDispatch, useSelector } from "react-redux";
import { onChangeAsideActive } from "../../store/features/asideSlice";
// import { onChangeAsideActive } from "../store/features/asideSlice";

const Sidebar = ({ sidebar, closeSidebar }) => {
  const aside = useSelector((state) => state.asideState.aside);
  const dispatch = useDispatch();
  return (
    <div
      className={sidebar ? "sidebar sidebar--open" : "sidebar"}
      onClick={closeSidebar}
    >
      <div className="new_sdiebar text-center">
        <List>
          {/* *  copy part left*/}
          <div className="details_part mt-3 ">
            <h3>demoId</h3>
            <div className="d-flex justify-cotent-evenly mt-3 mx-3">
              <i className="fa-solid fa-building-columns mx-2"></i>
              <p> Balance Information</p>
            </div>
            <div className="account_info">
              <div className="row">
                <div className="col">
                  <p>Available Credit </p>
                </div>
                <div className="col">
                  data
                  <p>453652 </p>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <p> Credit Limit </p>
                </div>
                <div className="col">
                  <p>200000 </p>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <p>winnigs </p>
                </div>
                <div className="col">
                  <p className="text-success">+45,3652 </p>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <p>Net Exposer </p>
                </div>
                <div className="col">
                  <p>0.00 </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <button
              className="sidelist button-6"
              onClick={() => dispatch(onChangeAsideActive("My Bets"))}
            >
              <img src="./cricket_ball.png" className="img_width" alt="" />
              Open Bets
            </button>
            <button
              className="sidelist button-6"
              onClick={() => dispatch(onChangeAsideActive("My Bets"))}
            >
              <img src="./cricket_ball.png" className="img_width" alt="" />
              Betting P&L
            </button>
            <button
              className="sidelist button-6"
              onClick={() => dispatch(onChangeAsideActive("My Bets"))}
            >
              <img src="./cricket_ball.png" className="img_width" alt="" />
              Transfer Statement
            </button>
            <button
              className="sidelist button-6"
              onClick={() => dispatch(onChangeAsideActive("My Bets"))}
            >
              <img src="./cricket_ball.png" className="img_width" alt="" />
              Time Setting
            </button>
            <button
              className="sidelist button-6"
              onClick={() => dispatch(onChangeAsideActive("My Bets"))}
            >
              <img src="./cricket_ball.png" className="img_width" alt="" />
              Change password
            </button>
            <button
              className="sidelist button-6"
              onClick={() => dispatch(onChangeAsideActive("My Bets"))}
            >
              <img src="./cricket_ball.png" className="img_width" alt="" />
              Setting
            </button>
          </div>
        </List>
      </div>
    </div>
  );
};

export default Sidebar;

// <div className="">
// <button
//   className="sidelist button-6"
//   onClick={() => dispatch(onChangeAsideActive("Favorites"))}
// >
//   <i className="fa-regular fa-star"></i>
//   Favorites
// </button>
// <div>
//   <button
//     className="sidelist button-6"
//     onClick={() => dispatch(onChangeAsideActive("My Bets"))}
//   >
//     <img src="./cricket_ball.png" className="img_width" alt="" />
//     My Bets
//   </button>
// </div>
// <div>
//   <button
//     className="sidelist button-6"
//     onClick={() =>
//       dispatch(onChangeAsideActive("Betting Profit & Loss"))
//     }
//   >
//     <img src="./greyhound.jpg" className="img_width" alt="" />
//     Betting Profit & Loss
//   </button>
// </div>
// <div>
//   <button
//     className="sidelist button-6"
//     onClick={() => dispatch(onChangeAsideActive("Horse Racing"))}
//   >
//     <img src="./horse_racing.jpg" className="img_width" alt="" />
//     Horse Racing
//   </button>
// </div>
// <div>
//   <button
//     className="sidelist button-6"
//     onClick={() => dispatch(onChangeAsideActive("Soccer"))}
//   >
//     <img src="./soccer.webp" className="img_width" alt="" />
//     Soccer
//   </button>
// </div>
// <div>
//   <button
//     className="sidelist button-6"
//     onClick={() => dispatch(onChangeAsideActive("Tennis"))}
//   >
//     <img src="./Tennis_bal.png" className="img_width" alt="" />
//     Tennis
//   </button>
// </div>
// <div>
//   <button
//     className="sidelist button-6"
//     onClick={() => dispatch(onChangeAsideActive("LiveCasino"))}
//   >
//     <img src="./caino.png" className="img_width" alt="" />
//     Live Casino
//   </button>
// </div>
// </div>
