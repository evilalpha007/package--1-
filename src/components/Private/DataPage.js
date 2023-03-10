import React, { useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onChangeAsideActive } from "../../store/features/asideSlice";
import { useGetCricketMatchesQuery } from "../../store/services/mainApi";
import { onChangeDataActive } from "../../store/features/dataSlice";

const DataPage = () => {
  const navigate = useNavigate();
  const aside = useSelector((state) => state.asideState.aside);
  const dispatch = useDispatch();

  const { data, error, isFetching } = useGetCricketMatchesQuery();
  if (error) return <>Error</>;
  if (isFetching) return <> Loading... </>;
  // console.log(data);

  return (
    <div>
      <div className="main_div button-8 mt-3">
        <table className="table">
          <tbody>
            {data.map((ele, i) => {
              return (
                <tr key={i}>
                  <td className="d-flex fsm remove_border hover_effect justify-content-between ">
                    <Link
                      to={{
                        pathname: `/game-list/event/${
                          ele?.eid ? ele.eid : ele.etid
                        }/${ele?.gameId ? ele.gameId : ele.gmid}`,
                      }}
                      className="flex-1"
                      onClick={() => {
                        dispatch(onChangeDataActive(ele));
                      }}
                    >
                      <strong className="mx-2 fsm">⭐</strong>
                      {ele?.eventName.split("/")[0]}
                    </Link>
                    <div className="">
                      {ele.inPlay ? (
                        <small>{ele?.eventName.split("/")[1]}</small>
                      ) : (
                        <small>InPlay</small>
                      )}
                    </div>
                  </td>
                  <td className="bluecolor w-63">
                    <strong>{ele.back1}</strong>
                  </td>
                  <td className="w-63 redcolor text-center">
                    <strong>{ele.lay1}</strong>
                  </td>
                  <td className="w-63 bluecolor">
                    <strong>{ele.back11}</strong>
                  </td>
                  <td className="w-63 redcolor text-center">
                    <strong>{ele.lay11}</strong>
                  </td>
                  <td className="w-63 bluecolor">
                    <strong>{ele.back12}</strong>
                  </td>
                  <td className="w-63 redcolor text-center">
                    <strong>{ele.lay12}</strong>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataPage;
