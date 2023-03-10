import React from "react";
import { useDispatch, useSelector } from "react-redux";
import BettingProfits from "../BettingProfits";
import CricketTable from "../CricketTable";
import DataPage from "../DataPage";
import EventAllMatch from "../EventAllMatch";
import LiveCasino from "../LiveCasino";
import MyBets from "../MyBets";
import Soccer from "../Soccer";
import MobEventMatch from "./childFolder/MobEventMatch";
import CarouselImage from './parentFolder/CarouselImage';
import Tennis from "./../Teniss";

const MobDetailPage = ({ activeAside }) => {
  const aside = useSelector((state) => state.asideState.aside);
  const dispatch = useDispatch();

  return (
    <div>
      {aside[0].isActive && <>Favorites Component</>}
      {aside[1].isActive && (
        <>
          <CarouselImage />
        </>
      )}
      {aside[2].isActive && <>Greyhound Racing</>}
      {aside[3].isActive && <>Horse Racing</>}
      {aside[4].isActive && <Soccer />}
      {aside[5].isActive && <Tennis />}
      {aside[6].isActive && <LiveCasino />}
      {aside[7].isActive && <MyBets />}
      {aside[8].isActive && <BettingProfits />}
      {aside[9].isActive && <EventAllMatch />}
      {aside[10].isActive && <MobEventMatch />}
    </div>
  );
};

export default MobDetailPage;
