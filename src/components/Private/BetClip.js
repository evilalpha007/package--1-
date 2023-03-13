import React, { useState } from "react";
import ToggleSwitch from "./ToggleSwitch";
import { useDispatch, useSelector } from "react-redux";
import { handleOddPointToggle } from "../store/features/stateManagementSlice";

const BetClip = () => {
  const dispatch = useDispatch();
  const { oddPointToggle, oddPointValue, color } = useSelector(
    (state) => state.stateManagement
  );
  const handleClick = () => {};
  const addOddPoint = () => {};
  const removeHandle = () => {
    dispatch(handleOddPointToggle([false, undefined]));
  };

  return (
    <div>
      <ToggleSwitch label='Notifications' />
      <h5>Betslip</h5>
      <hr />
      {oddPointToggle && (
        <div className='betslip mt-3'>
          <div className='betcard d-flex align-items-center'>
            <div className='sblue'></div>
            <span className='mx-2'>Back</span>
          </div>
          <ul className='market_list'>
            <li className='list-unstyled'>
              <a href='#'>
                <span className='fsm '>India vs Sri Lanka</span>
              </a>
            </li>
          </ul>
          <ul className='betList list-unstyled'>
            <li className='bet'>
              <div className={`${color === "pink" ? "backpink" : "backblue"}`}>
                <span>India</span>
                <div className='bet_fields'>
                  <div className='row'>
                    <div className='col-lg-6 fsm fw-normal'>Odds</div>
                    <div className='col-lg-3 fsm fw-normal'>Profits</div>
                  </div>
                  <div className='row'>
                    <div className='col-lg-3'>
                      <input
                        type='number'
                        onChange={addOddPoint}
                        value={oddPointValue}
                        className='tentacles'
                        name='oddsPoints'
                      />
                    </div>
                    <div className='col-lg-3'>
                      <input
                        type='text'
                        placeholder='Stake'
                        className='tentacles'
                        name='betPoints'
                      />
                    </div>
                    <div className='col-lg-3'>
                      <span>0:00</span>
                    </div>
                    <div className='col-lg-3'>
                      <button className='button-29 bg-danger'>X</button>
                    </div>
                  </div>
                  <div className='bg-light mt-2 px-2 py-2'>
                    <div className='row '>
                      <div className='col-lg-3'>
                        <button className='button-29 bet_coin  bg-danger'>
                          +500
                        </button>
                      </div>
                      <div className='col-lg-3'>
                        <button
                          className='button-29 bet_coin bg-danger'
                          onClick={handleClick}>
                          +1,000
                        </button>
                      </div>
                      <div className='col-lg-3'>
                        <button className='button-29 bet_coin bg-danger'>
                          +2,000
                        </button>
                      </div>
                      <div className='col-lg-3'>
                        <button className='button-29 bet_coin bg-danger'>
                          Max
                        </button>
                      </div>
                    </div>
                    <div className='row mt-2'>
                      <div className='col-lg-3'>
                        <button className='button-29 bet_coin  bg-danger'>
                          +500
                        </button>
                      </div>
                      <div className='col-lg-3'>
                        <button className='button-29 bet_coin bg-danger'>
                          +1,000
                        </button>
                      </div>
                      <div className='col-lg-3'>
                        <button className='button-29 bet_coin bg-danger'>
                          +2,000
                        </button>
                      </div>
                      <div className='col-lg-3'>
                        <button className='button-29 bet_coin bg-danger'>
                          Max
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>

          <p className='summary_info fsm'>Liability: 0.00</p>
          <div className='row'>
            <div className='col-lg-2'></div>
            <div className='col-lg-4'>
              <button
                className='button-29  fsm bg-danger'
                onClick={removeHandle}>
                Remove All
              </button>
            </div>
            <div className='col-lg-4 fsm border border-1  d-flex justify-content-center align-items-center mx-4'>
              Place bets
            </div>
          </div>

          <div className='form-check mt-3 mb-2'>
            <input
              className='form-check-input'
              type='checkbox'
              value=''
              id='flexCheckDefault'
            />
            <label className='form-check-label fsm' htmlFor='flexCheckDefault'>
              Confirm bets before placing
            </label>
          </div>
        </div>
      )}
    </div>
  );
};

export default BetClip;
