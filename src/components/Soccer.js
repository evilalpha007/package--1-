import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { onChangeAsideActive } from "../store/features/asideSlice";
import { useGetSoccerMatchesQuery } from "../store/services/mainApi";

const Soccer = () => {
  const aside = useSelector((state) => state.asideState.aside);
  const dispatch = useDispatch();
  const { data, error, isFetching } = useGetSoccerMatchesQuery();
  console.log(data);
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
                      onClick={() =>
                        dispatch(onChangeAsideActive("EventAllMatch"))
                      }
                    >
                      <strong className="mx-2 fsm">⭐</strong>
                      {ele?.cname.split("/")[0]}
                    </NavLink>
                    <div className="">
                      <small>
                        {ele.iplay ? ele.stime  : ""}

                        {ele?.cname.split("/")[1]}
                      </small>
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

export default Soccer;
