import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useGetCricketMatchesQuery } from "../../../store/services/mainApi";


const MobDataPage = () => {
  const aside = useSelector((state) => state.asideState.aside);
  const dispatch = useDispatch();

  const { data, error, isFetching } = useGetCricketMatchesQuery();
  if (error) return <>Error</>;
  console.log(data);
  if (isFetching) return <> Loading... </>;
  return (
    <div className="MobDataPage mb-5 ">
      {data.map((ele, i) => {
        return (
          <>
            <div className="row fsm align-items-center mt-2 mx-1">
              <div className="col-7">
                <i>
                  🏀 <span> {ele?.eventName.split("/")[0]}</span>
                </i>
              </div>
              <div className="col-5">
                <div className="event_iconsyt d-flex">
                  <div className="video-play-icon mx-3">⏯️</div>
                  <span> {ele?.eventName.split("2023")[1]}</span>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default MobDataPage