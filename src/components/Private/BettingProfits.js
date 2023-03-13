import React from 'react'
import Calender from './Calender';

const BettingProfits = () => {
  return (
    <div>
    <div className="detailHead d-flex align-items-center justify-content-between mt-2">
    <h5 className="fw-normal">Betting Profits and Loss</h5>
  </div>
  <hr />
  <div className="row mt-2">
  <div className="col">
  <p className="font-small">Form</p>
  </div>
  <div className="col-lg-10 ">
  <p className="font-small">To</p>
  </div>
  </div>
  <div className="row mt-2">
  <div className="col-lg-2">
<Calender/>
  </div>
  <div className="col-lg-2">
  <Calender/>
  
  </div>
  <div className="col-lg-2 ">
<button className="button-29">Search</button>
  
  </div>
  </div>
    </div>
  )
}

export default BettingProfits