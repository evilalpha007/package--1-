import React from "react";
import DataPage from "./DataPage";
import LiveCasino from "./LiveCasino";
import Soccer from "./Soccer";
import MyBets from "./MyBets";
import BettingProfits from "./BettingProfits";
import CricketTable from "./CricketTable";
import { useDispatch, useSelector } from "react-redux";
import EventAllMatch from "./EventAllMatch";
import MobEventMatch from "../mobile/childFolder/MobEventMatch";
import Tennis from "./Teniss";

const DetailPage = ({ activeAside }) => {
  const aside = useSelector((state) => state.asideState.aside);
  const dispatch = useDispatch();

  return (
    <div>
      {aside[0].isActive && <>Favorites Component</>}
      {aside[1].isActive && (
        <>
          <CricketTable />
          <DataPage />
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

export default DetailPage;
