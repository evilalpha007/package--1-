import React from "react";
import MatchTable from "../childFolder/MatchTable";
import MostPopular from "./MostPopular";


const CarouselImage = () => {
  return (
    <div className="carousel-img">
      <div className="bgpart">
        <img
          src="./image/mobileimage/banner_casino_01.jpeg"
          className="bg-1"
          alt=""
        />
        <img
          src="./image/mobileimage/banner_horse_01.jpeg"
          className="bg-1"
          alt=""
        />
      </div>
      <div
        className="InPlay_page
    "
      >
        <i className="fa-solid fa-circle-play mx-3"></i>
        <span>In Play</span>
      </div>
      <MatchTable />
<MostPopular/>
      
    </div>
  );
};

export default CarouselImage;
