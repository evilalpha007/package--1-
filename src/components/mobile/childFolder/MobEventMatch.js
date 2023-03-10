import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import { handleOddPointToggle } from "../store/features/stateManagementSlice";
const MobEventMatch = () => {
  const dispatch = useDispatch();
  const allData = useSelector((state) => state.dataState.mobData);
console.log(allData.data);
  return (
    <div className="MobEventMatch">
      <div className="main-details-header">
        <h3> {allData.data?.eventName.split("/")[0]} </h3>
        <span>Today {allData.data?.eventName.split("/")[1].split("(IST)")} </span>
      </div>
      <div className="head-navbar d-flex">
        <button className="head-navbar-btn">Market</button>
        <button className="head-navbar-btn">NEWS</button>
        <button className="head-navbar-btn">LIVE</button>
        <button className="head-navbar-btn">OPEN BET (0)</button>
      </div>

      <div className="row nav-tab p-2 fsm text-capitalize">
        <div className="col border-end ">match stats</div>
        <div className="col"> watch live ⏯️</div>
      </div>

      <div className="row border_bottom mt-3">
        <div className="col-7 mx-3">
          <div className="market_list">
            <div className="heading">
              <div className="title">Match Odds</div>
            </div>
          </div>
        </div>
        <div className="col-3 d-flex justify-content-evenly">
          <div className="market_actions">back</div>
          <div className="market_actions">lay</div>
        </div>
      </div>

      <div className="row border_bottom mt-2 align-items-center">
        <div className="col-6 fw-bold mx-2">
          {allData.data?.eventName.split("/")[0].split("v")[0]}
        </div>
        <div className="col-5 d-flex justify-content-center">
          <div className="marketodds d-flex ">
            <button className="button_odds bet_button mx-2">
              <span>{allData.data.back1}</span>
              <span>{allData.data.back11}</span>
            </button>
            <button className="button_odds darkpink bet_button">
              <span>{allData.data.lay1}</span>
              <span>{allData.data.lay11}</span>
            </button>
          </div>
        </div>
      </div>
      <div className="row border_bottom mt-2 align-items-center">
        <div className="col-6 fw-bold mx-2">
          {allData.data?.eventName.split("/")[0].split(" v ")[1]}
        </div>
        <div className="col-5 d-flex justify-content-center">
          <div className="marketodds d-flex ">
            <button className="button_odds bet_button mx-2">
              <span>{allData.data.back1}</span>
              <span>{allData.data.back11}</span>
            </button>
            <button className="button_odds darkpink bet_button">
              <span>{allData.data.lay1}</span>
              <span>{allData.data.lay11}</span>
            </button>
          </div>
        </div>
      </div>
      <div className="row border_bottom mt-3 mr-0">
        <div className="col-7 mx-3">
          <div className="market_list">
            <div className="heading">
              <div className="title">BOOKMAKER</div>
            </div>
          </div>
        </div>
        <div className="col-3 d-flex justify-content-evenly">
          <div className="market_actions">back</div>
          <div className="market_actions">lay</div>
        </div>
      </div>
      <div className="row border_bottom mt-2 align-items-center">
        <div className="col-6 fw-bold mx-2">
          {allData.data?.eventName.split("/")[0].split(" v ")[0]}
        </div>
        <div className="col-5 d-flex justify-content-center">
          <div className="marketodds d-flex ">
            <button className="button_odds bet_button mx-2">
              <span>{allData.data.back1}</span>
              <span>{allData.data.back11}</span>
            </button>
            <button className="button_odds darkpink bet_button">
              <span>{allData.data.lay1}</span>
              <span>{allData.data.lay11}</span>
            </button>
          </div>
        </div>
      </div>
      <div className="row border_bottom mt-2 align-items-center">
        <div className="col-6 fw-bold mx-2">
          {allData.data?.eventName.split("/")[0].split(" v ")[1]}
        </div>
        <div className="col-5 d-flex justify-content-center">
          <div className="marketodds d-flex ">
            <button className="button_odds bet_button mx-2">
              <span>{allData.data.back1}</span>
              <span>{allData.data.back11}</span>
            </button>
            <button className="button_odds darkpink bet_button">
              <span>{allData.data.lay1}</span>
              <span>{allData.data.lay11}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobEventMatch;
