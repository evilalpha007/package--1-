import React from 'react'
import MobDataPage from './MobDataPage'

const MostPopular = () => {
  return (
    <div className="MostPopular">
    <div className="bgpart mt-3">
      <img
        src="./image/mobileimage/banner_casino_01.jpeg"
        className="bg-1"
        alt="BG"
      />
      <img
        src="./image/mobileimage/banner_horse_01.jpeg"
        className="bg-1"
        alt="BG"
      />
    </div>
    <div
    className="Most_popular"
  >
  <i className="fa-solid fa-circle-exclamation mx-3"></i>
    <span>Most Popular</span>
  </div>
  <MobDataPage/>
    </div>
  )
}

export default MostPopular