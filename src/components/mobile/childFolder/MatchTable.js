import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { onChangeAsideActive } from "../../../store/features/asideSlice";
import { onChangeDataActive } from "../../../store/features/dataSlice";
import { useGetCricketMatchesQuery } from "../../../store/services/mainApi";
import MobEventMatch from "./MobEventMatch";
import SportsBaseballIcon from '@mui/icons-material/SportsBaseball';
const MatchTable = () => {
  const aside = useSelector((state) => state.asideState.aside);
  const dispatch = useDispatch();

  const { data, error, isFetching } = useGetCricketMatchesQuery();
  if (error) return <>Error</>;
  console.log(data);
  if (isFetching) return <> Loading... </>;
  return (
    <div className="MatchTable mt-3">
      {data.map((ele, i) => {
        return (
          <div className="row align-items-center mb-2 mx-1" key={i}>
            <div className="col">
              <div className="event_details">
                <SportsBaseballIcon sx={{ fontSize: 20 }} />
                <span
                  onClick={() => {
                    dispatch(onChangeAsideActive("MobEventMatch"));
                    dispatch(
                      onChangeDataActive({
                        name: "MobEventMatch",
                        data: ele,
                      })
                    );
                  }}
                  className="text-left"
                >
                  {ele?.eventName.split("/")[0]}
                </span>

                <div className="event_iconsyt">
                  <div className="video-play-icon">⏯️</div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="bet-button d-flex justify-content-between">
                <button className="bet_button">
                  <div className="price">{ele.back1}</div>
                  <div className="market_volume">{ele.back11}</div>
                </button>
                <button className="bet_button">
                  <div className="price">1.88</div>
                  <div className="market_volume">1650</div>
                </button>
                <button className="bet_button">
                  <div className="price">{ele.lay1}</div>
                  <div className="market_volume">{ele.lay11}</div>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MatchTable;
