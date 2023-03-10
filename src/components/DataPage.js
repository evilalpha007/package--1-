import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onChangeAsideActive } from "../store/features/asideSlice";
import { useGetCricketMatchesQuery } from "../store/services/mainApi";
import { onChangeDataActive } from "../store/features/dataSlice";

const DataPage = () => {
  const navigate = useNavigate();
  const aside = useSelector((state) => state.asideState.aside);
  const dispatch = useDispatch();

  const { data, error, isFetching } = useGetCricketMatchesQuery();
  if (error) return <>Error</>;
  if (isFetching) return <> Loading... </>;
  console.log(data);

  return (
    <div>
      <div className="main_div button-8 mt-3">
        <table className="table">
          <tbody>
            {data.map((ele, i) => {
              return (
                <tr key={i}>
                  <td className="d-flex fsm remove_border hover_effect justify-content-between ">
                    <NavLink
                      to=""
                      className="flex-1"
                      onClick={() => {
                        // navigate(`/match/${data.gameId}`);
                        dispatch(onChangeAsideActive("EventAllMatch"));
                        dispatch(
                          onChangeDataActive({
                            name: "EventAllMatch",
                            data: ele,
                          })
                        );
                      }}
                    >
                      <strong className="mx-2 fsm">⭐</strong>
                      {ele?.eventName.split("/")[0]}
                    </NavLink>
                    <div className="">
                      {ele.inPlay ? (
                        <small>{ele?.eventName.split("/")[1]}</small>
                      ) : (
                        <small>InPlay</small>
                      )}
                    </div>
                  </td>
                  <td className="bluecolor w-63">
                    <strong>-</strong>
                  </td>
                  <td className="w-63 redcolor text-center">
                    <strong>-</strong>
                  </td>
                  <td className="w-63 bluecolor">
                    <strong>-</strong>
                  </td>
                  <td className="w-63 redcolor text-center">
                    <strong>-</strong>
                  </td>
                  <td className="w-63 bluecolor">
                    <strong>-</strong>
                  </td>
                  <td className="w-63 redcolor text-center">
                    <strong>-</strong>
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
