import React from "react";
import ToggleSwitch from "./../ToggleSwitch";
import AdminMemberListings from "./AdminMemberListing";

const BalanceBar = () => {
  return (
    <div className="balance_bar d-flex justify-content-between  mb-3">
      <div className="balance_iner ">
        <span>
          Balance Down: <span className="green">00</span>{" "}
        </span>
        <span>
          Balance Down: <span className="green">00</span>{" "}
        </span>
        <span>
          Balance Down: <span className="green">00</span>{" "}
        </span>
        <span>
          Balance Down: <span className="green">00</span>{" "}
        </span>
      </div>
      <div className="balance_onof d-flex mx-5">position :</div>
    </div>
  );
};

export default BalanceBar;
