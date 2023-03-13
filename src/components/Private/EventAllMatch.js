import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { handleOddPointToggle } from "../store/features/stateManagementSlice";
import { useGetGameIdMarketQuery } from "../store/services/mainApi";

const EventAllMatch = () => {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const allData = useSelector((state) => state.dataState.data);

  const { data, error, isFetching } = useGetGameIdMarketQuery(
    allData.data.gameId
  );
  if (error) return <>Error</>;
  if (isFetching) return <> Loading... </>;

  // const flattenedArray = data.flatMap((arr1) =>
  //   arr1.t1.flatMap((arr2) => arr2)
  // );
  // console.log(flattenedArray);
  // navigation("/matches");
  return (
    <div>
      <div className="row mt-2">
        <div className="col-lg-6">
          <h3> {allData.data?.eventName.split("/")[0]}</h3>
        </div>
        <div className="col-lg-6 d-flex justify-content-end align-items-center">
          {allData.data?.eventName.split("/")[1]}
        </div>
      </div>
      <hr />

      <div className="row mt-5 fw">
        <div className="col-lg-8 ">
          <i className="fa fa-star" aria-hidden="true"></i>
          Match Odds
        </div>
        <div className="col-lg-1">Back</div>
        <div className="col-lg-1">Lay</div>
      </div>

      <div className="main_div  mt-3">
        <table className="table">
          <tbody>
            <tr
              style={{ border: " 1.98px solid #d2d2d2" }}
              className="hover_effect"
            >
              <td className="d-flex remove_border  justify-content-between ">
                <a to="" className="flex-1">
                  {allData.data?.eventName.split("/")[0].split(" v ")[0]}
                </a>
              </td>
              <td className="bluecolor1 w-63">
                <strong>{data.t1.b1}</strong>
                <strong>-</strong>
              </td>
              <td className="w-63 bluecolor1 text-center">
                <strong>-</strong>
              </td>
              <td className="w-63 darkblue">
                <strong
                  className="fw"
                  onClick={(e) =>
                    dispatch(handleOddPointToggle([e.target.innerText, true]))
                  }
                >
                  {" "}
                  {allData.data.back1}
                </strong>
                <div
                  className="fw"
                  onClick={(e) =>
                    dispatch(handleOddPointToggle([e.target.innerText, true]))
                  }
                >
                  {allData.data.back1}
                </div>
              </td>
              <td className="w-63 darkpink text-center">
                <strong>-</strong>
              </td>
              <td className="w-63 redcolor">
                <strong>-</strong>
              </td>
              <td className="w-63 redcolor text-center">
                <strong>-</strong>
              </td>
            </tr>

            <tr
              style={{ border: " 1.98px solid #d2d2d2" }}
              className="hover_effect"
            >
              <td className="d-flex remove_border  justify-content-between ">
                <a to="" className="flex-1">
                  {allData.data?.eventName.split("/")[0].split(" v ")[1]}
                </a>
              </td>
              <td className="bluecolor1 w-63">
                <strong>-</strong>
              </td>
              <td className="w-63 bluecolor1 text-center">
                <strong>-</strong>
              </td>
              <td className="w-63 darkblue">
                <strong>-</strong>
              </td>
              <td className="w-63 darkpink text-center">
                <strong className="fw">{allData.data.lay1}</strong>
                <div
                  className="fw"
                  onClick={(e) =>
                    dispatch(handleOddPointToggle([e.target.innerText, true]))
                  }
                >
                  {allData.data.lay11}
                </div>
              </td>
              <td className="w-63 redcolor">
                <strong>-</strong>
              </td>
              <td className="w-63 redcolor text-center">
                <strong>-</strong>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="row mt-5 fw">
        <div className="col-lg-8 ">
          <i className="fa fa-star" aria-hidden="true"></i>
          BOOKMAKER
        </div>
        <div className="col-lg-1 ">Back</div>
        <div className="col-lg-1">Lay</div>
      </div>

      <div className="main_div  mt-3">
        <table className="table">
          <tbody>
            <tr
              style={{ border: " 1.98px solid #d2d2d2" }}
              className="hover_effect"
            >
              <td className="d-flex remove_border  justify-content-between ">
                <a to="" className="flex-1">
                  Pakistan
                </a>
              </td>
              <td className="bluecolor1 w-63">
                <strong>-</strong>
              </td>
              <td className="w-63 bluecolor1 text-center">
                <strong>-</strong>
              </td>
              <td className="w-63 darkblue">
                <strong className="fw">12.00</strong>
                <div className="fw">1.23</div>
              </td>
              <td className="w-63 darkpink text-center">
                <strong>-</strong>
              </td>
              <td className="w-63 redcolor">
                <strong>-</strong>
              </td>
              <td className="w-63 redcolor text-center">
                <strong>-</strong>
              </td>
            </tr>

            <tr
              style={{ border: " 1.98px solid rgb(215 215 215)" }}
              className="hover_effect"
            >
              <td className="d-flex remove_border  justify-content-between ">
                <a to="" className="flex-1">
                  afghanistan
                </a>
              </td>
              <td className="bluecolor1 w-63">
                <strong>-</strong>
              </td>
              <td className="w-63 bluecolor1 text-center">
                <strong>-</strong>
              </td>
              <td className="w-63 darkblue">
                <strong>-</strong>
              </td>
              <td className="w-63 darkpink text-center">
                <strong
                  className="fw"
                  onClick={(e) =>
                    dispatch(
                      handleOddPointToggle([
                        e.target.innerText,
                        true,
                        "darkpink",
                      ])
                    )
                  }
                >
                  12.00
                </strong>
                <div
                  className="fw"
                  onClick={(e) =>
                    dispatch(handleOddPointToggle([e.target.innerText, true]))
                  }
                >
                  1.23
                </div>
              </td>
              <td className="w-63 redcolor">
                <strong>-</strong>
              </td>
              <td className="w-63 redcolor text-center">
                <strong>-</strong>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EventAllMatch;
