import React from "react";
import { Route, Routes } from "react-router";
import ProtectedRoute from "./ProtectedRoute";
import Login from "../components/Private/Login";
import List from "../components/Private/List";

import { useSelector } from "react-redux";
import PrivateLayouts from "./layouts/PrivateLayouts";
import DetailPage from "../components/Private/DetailPage";
import CricketTable from "../components/Private/CricketTable";
import DataPage from "../components/Private/DataPage";
import Soccer from "../components/Private/Soccer";
import EventAllMatch from "../components/Private/EventAllMatch";
import Tennis from "../components/Private/Teniss";
import BettingProfits from "../components/Private/BettingProfits";
import MobEventMatch from "../components/mobile/childFolder/MobEventMatch";
import LiveCasino from "../components/Private/LiveCasino";

export default function PrivateRoutes() {
  const { login } = useSelector((state) => state.auth);

  const routesData = [
    {
      path: "/game-list/cricket",
      component: (
        <>
          <CricketTable />
          <DataPage />
        </>
      ),
    },
    {
      path: "/game-list/event/:eventId/:gameId",
      component: <EventAllMatch />,
    },
    { path: "/game-list/favorites", component: <>Favorites Component</> },
    { path: "/game-list/casino", component: <LiveCasino /> },
    { path: "/game-list/soccer", component: <Soccer /> },
    {
      path: "/game-list/grey-hound-racing",
      component: <>Greyhound Racing</>,
    },
    {
      path: "/game-list/horse-racing",
      component: <>Horse Racing</>,
    },
    { path: "/game-list/tennis", component: <Tennis /> },
    { path: "/game-list/betting-profits", component: <BettingProfits /> },
    { path: "/game-list/mob-event-page", component: <MobEventMatch /> },
  ];

  return (
    <>
      {login ? (
        <PrivateLayouts>
          <Routes>
            <Route element={<ProtectedRoute login={true} />}>
              {routesData.map(({ path, component }) => (
                <Route exact path={path} element={component} />
              ))}
            </Route>
          </Routes>
        </PrivateLayouts>
      ) : (
        <Routes>
          <Route exact path="/" element={<Login />} />
        </Routes>
      )}
    </>
  );
}
