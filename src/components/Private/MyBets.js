import React from "react";
import Calender from './Calender';

const MyBets = () => {
  return (
    <div>
      <div className='detailHead d-flex align-items-center justify-content-between'>
        <h4>My Bets</h4>
      </div>
      <hr />
      <div className='row mt-3'>
        <div className='col-12 col-lg-6'>
          <button className='button-4 col-lg-2'>current</button>
          <button className='button-4 mx-3'>Past</button>
          <div className='mt-3'>
          <button className='button-5'>matched</button>
          <button className='button-5 mx-3'>unmatched</button>
          </div>
        </div>
        
      </div>
      <div className='row mt-3'>
        <div className='col'>
          
          <div className='col-lg-2 fs-6'>form</div>
          <div className='col-lg-2 fs-6'> <Calender/> </div>
          <div className='col-lg-5 fs-6'>To</div>
          <div className='col-lg-5 fs-6'> <Calender/> </div>
        </div>
    
      </div>
    </div>
  );
};

export default MyBets;

