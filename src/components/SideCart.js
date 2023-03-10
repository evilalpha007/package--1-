import React from "react";
import { useSelector } from "react-redux";
import BetClip from "./BetClip";

const SideCart = () => {
  return (
    <div className='side-cart1'>
      <div className='dropdown '>
        <button
          className='btn btn_drop_down btn-secondary dropdown-toggle  d-flex justify-content-between align-items-center  '
          type='button'
          id='dropdownMenuButton1'
          data-bs-toggle='dropdown'
          aria-expanded='false'>
          <p className='sideCart_head'>Available credit</p>
        </button>
        <ul className='dropdown-menu' aria-labelledby='dropdownMenuButton1'>
          <p className='mx fw px-3'>Credit : 1,000,000.00</p>
          <p className='mx fw px-3'>Total Net Exposure: 0.00</p>
        </ul>
      </div>
      <BetClip />
    </div>
  );
};

export default SideCart;

// first create a state in redux
