import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { handleOddPointToggle } from "../../store/features/stateManagementSlice";
import { useGetGameIdMarketQuery } from "../../store/services/mainApi";

const EventAllMatch = () => {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const allData = useSelector((state) => state.dataState.data);
  const location = useLocation();
  let gameId = "";
  if (allData?.bmarketId) {
    gameId = "marketst/" + allData.bmarketId.split(".")[1];
  } else {
    gameId =
      "market/" +
      location.pathname.split("/")[location.pathname.split("/").length - 1];
  }

  const { data, error, isFetching } = useGetGameIdMarketQuery(gameId);
  if (error) return <>Error</>;
  if (isFetching) return <> Loading... </>;

  console.log(data);
  // const flattenedArray = data.flatMap((arr1) =>
  //   arr1.t1.flatMap((arr2) => arr2)
  // );
  // console.log(flattenedArray);
  // navigation("/matches");
  return (
    <div>
      <div className="row mt-2">
        <div className="col-lg-6">
          <h3> {allData?.eventName?.split("/")[0]}</h3>
        </div>
        <div className="col-lg-6 d-flex justify-content-end align-items-center">
          {allData?.eventName?.split("/")[1]}
        </div>
      </div>
      <hr />

      {data?.status !== "something went wrong" &&
        !gameId?.includes("marketst") && (
          <>
            <DataTable
              dispatch={dispatch}
              data={data?.t1[0]}
              title={"Match Odds"}
              hideDataPhone={false}
            />
            {data?.t2[0]?.bm1 && (
              <DataTable
                dispatch={dispatch}
                data={data?.t2[0]?.bm1}
                title={"BOOKMAKER"}
                hideDataPhone={true}
              />
            )}
            {data?.t3 && (
              <DataTable
                dispatch={dispatch}
                data={data?.t3}
                title={"Fancy"}
                hideData
                hideDataPhone={true}
              />
            )}
            {data?.t4 && (
              <DataTable
                dispatch={dispatch}
                data={data?.t4}
                title={"Fancy 2"}
                hideData
                hideDataPhone={true}
              />
            )}
          </>
        )}
      {gameId?.includes("marketst") && (
        <>
          {data && (
            <DataTableVersionTwo
              dispatch={dispatch}
              title={"Match Odds"}
              data={data[0][0]}
            />
          )}
        </>
      )}

      {/* <div className="row mt-5 fw">
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
                <div className="flex-1">Pakistan</div>
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
                <div className="flex-1">afghanistan</div>
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
      </div> */}
    </div>
  );
};

function DataTable({ data, dispatch, title, hideData, hideDataPhone }) {
  return (
    <>
      <div className="row mt-5 fw">
        <div className="col-lg-8 ">
          <i className="fa fa-star" aria-hidden="true"></i>
          {title}
        </div>
        <div className="col-lg-1">Back</div>
        <div className="col-lg-1">Lay</div>
      </div>

      <div className="main_div  mt-3">
        <table className="table">
          <tbody>
            {data &&
              data.map((ele, i) => (
                <DataTableItem
                  ele={ele}
                  i={i}
                  hideData={hideData}
                  hideDataPhone={hideDataPhone}
                  dispatch={dispatch}
                />
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

const DataTableItem = ({ ele, i, hideData, hideDataPhone, dispatch }) => {
  return (
    <>
      <tr style={{ border: " 1.98px solid #d2d2d2" }} className="hover_effect">
        <td
          className={`d-flex remove_border  justify-content-between  ${
            hideDataPhone && "hide_part"
          }`}
        >
          {ele?.nat}
        </td>
        {!hideData && (
          <>
            <td
              className={`w-63 bluecolor1 text-center  ${
                hideDataPhone && "hide_part"
              }`}
              onClick={(e) =>
                dispatch(handleOddPointToggle([e.target.innerText, true]))
              }
            >
              <div className="flex-1">{ele?.b3}</div>
              <div className="flex-1">{ele?.bs3}</div>
            </td>
            <td
              className={`bluecolor1 w-63  ${hideDataPhone && "hide_part"}`}
              onClick={(e) =>
                dispatch(handleOddPointToggle([e.target.innerText, true]))
              }
            >
              <div className="flex-1">{ele?.b2}</div>
              <div className="flex-1">{ele?.bs2}</div>
            </td>
          </>
        )}

        <td
          className={`w-63 bluecolor1 text-center ${
            hideDataPhone && "hide_part"
          }`}
          onClick={(e) =>
            dispatch(handleOddPointToggle([e.target.innerText, true]))
          }
        >
          <div className="flex-1">{ele?.b1}</div>
          <div className="flex-1">{ele?.bs1}</div>
        </td>

        <td
          className={`darkpink w-63  ${hideDataPhone && "hide_part"}`}
          onClick={(e) =>
            dispatch(handleOddPointToggle([e.target.innerText, true]))
          }
        >
          <div className="flex-1">{ele?.l1}</div>
          <div className="flex-1">{ele?.ls1}</div>
        </td>

        {!hideData && (
          <>
            <td
              className={`w-63 darkpink text-center  ${
                hideDataPhone && "hide_part"
              }`}
              onClick={(e) =>
                dispatch(handleOddPointToggle([e.target.innerText, true]))
              }
            >
              <div className="flex-1">{ele?.l2}</div>
              <div className="flex-1">{ele?.ls2}</div>
            </td>
            <td
              className={`darkpink w-63  ${hideDataPhone && "hide_part"}`}
              onClick={(e) =>
                dispatch(handleOddPointToggle([e.target.innerText, true]))
              }
            >
              <div className="flex-1">{ele?.l3}</div>
              <div className="flex-1">{ele?.ls3}</div>
            </td>
          </>
        )}
      </tr>

      {/* <div
        key={i}
        className="grid grid-cols-10 table_header_details p-1 gap-[2px]"
      >
        <div className="col-span-2 sm:col-span-3 font_size_small flex justify-end gap-[2px]">
          {!hideData && (
            <>
              <div
                className={`bg-[#b2d7f1]  text-center p-1   minimum_width w-full  ${
                  hideDataPhone && "hide_part"
                }`}
                // onClick={() =>
                //   dispatch(
                //     handelActiveMatch({
                //       activeMatch: ele,
                //       color: "#72bbef",
                //       oddValue: ele?.b3,
                //     })
                //   )
                // }
              >
                <div className=" font-bold cursor-pointer">{ele?.b3}</div>
                <div className="text-[10px] cursor-pointer">{ele?.bs3}</div>
              </div>
              <div
                className={`bg-[#92c9f0] text-center p-1 minimum_width w-full ${
                  hideDataPhone && "hide_part"
                } `}
                // onClick={() =>
                //   dispatch(
                //     handelActiveMatch({
                //       activeMatch: ele,
                //       color: "#72bbef",
                //       oddValue: ele?.b2,
                //     })
                //   )
                // }
              >
                <div className=" font-bold cursor-pointer">{ele?.b2}</div>
                <div className="text-[10px] cursor-pointer">{ele?.bs2}</div>
              </div>
            </>
          )}
          <div
            className={`bg-[#72bbef] text-center p-1 minimum_width  w-full `}
            onClick={() => {
              // dispatch(
              //   handelActiveMatch({
              //     activeMatch: ele,
              //     color: "#72bbef",
              //     oddValue: ele?.b1,
              //   })
              // );
            }}
          >
            <div className=" font-bold cursor-pointer">{ele?.b1}</div>
            <div className="text-[10px] cursor-pointer">{ele?.bs1}</div>
          </div>
        </div>

        <div className="col-span-3 sm:col-span-3   font_size_small flex gap-[2px]">
          <div
            className="bg-[#faa9ba] text-center p-1 w-full  minimum_width"
            onClick={() => {
              // dispatch(
              //   handelActiveMatch({
              //     activeMatch: ele,
              //     color: "#faa9ba",
              //     oddValue: ele?.l1,
              //   })
              // );
            }}
          >
            <div className=" font-bold cursor-pointer">{ele?.l1}</div>
            <div className="text-[10px] cursor-pointer">{ele?.ls1}</div>
          </div>
          {!hideData && (
            <>
              <div
                className={`bg-[#f8bcc8] text-center p-1  w-full minimum_width ${
                  hideDataPhone && "hide_part"
                }`}
                // onClick={() =>
                //   dispatch(
                //     handelActiveMatch({
                //       activeMatch: ele,
                //       color: "#faa9ba",
                //       oddValue: ele?.l2,
                //     })
                //   )
                // }
              >
                <div className=" font-bold cursor-pointer">{ele?.l2}</div>
                <div className="text-[10px] cursor-pointer">{ele?.ls2}</div>
              </div>

              <div
                className={`bg-[#f6ced6] text-center p-1 w-full   minimum_width ${
                  hideDataPhone && "hide_part"
                }`}
                // onClick={() =>
                //   dispatch(
                //     handelActiveMatch({
                //       activeMatch: ele,
                //       color: "#faa9ba",
                //       oddValue: ele?.l3,
                //     })
                //   )
                // }
              >
                <div className=" font-bold cursor-pointer">{ele?.l3}</div>
                <div className="text-[10px] cursor-pointer">{ele?.ls3}</div>
              </div>
            </>
          )}
        </div>
      </div> */}
    </>
  );
};

function DataTableVersionTwo({
  data,
  dispatch,
  title,
  hideData,
  hideDataPhone,
}) {
  return (
    <>
      <div className="match_odss_header m-1 p-2 text-white flex justify-between bg-[#0f2462d9]">
        <p>{title}</p>
        <span className="material-symbols-outlined">info</span>
      </div>
      <div className="table_header m-1 grid grid-cols-10 p-1 gap-[2px]">
        <div className="text-[#17a2b8] font-bold col-span-4">Min: - Max: 1</div>
        <div className=" col-span-3 flex justify-center">
          <div className="font-bold w-[90px] bg-[#72BBEF] text-center">
            BACK
          </div>
        </div>

        <div className="font-bold w-[90px] bg-[#FAA9BA] text-center col-span-3">
          LAY
        </div>
      </div>
      {data &&
        data?.runners?.map((ele, i) => {
          return (
            <div key={i} className="grid grid-cols-10 p-1 gap-[2px]">
              <div className="col-span-3 sm:col-span-3 bg-[#f2f2f2] text-sm p-1">
                <div className="text-left cursor-pointer font-bold">
                  {ele?.nat || "Name"}
                </div>
                {/* <div className="text-right cursor-pointer">0.20</div> */}
              </div>
              <div
                className="col-span-3 flex gap-[2px]"
                // onClick={() => dispatch(handelColor("#72bbef"))}
              >
                <div className="bg-[#b2d7f1] text-center p-1 w-full minimum_width">
                  <div className=" font-bold cursor-pointer">
                    {ele?.ex.availableToBack[0].price}
                  </div>
                  <div className="text-[10px] cursor-pointer">
                    {ele?.ex.availableToBack[0].size}
                  </div>
                </div>
                <div className="bg-[#92c9f0] text-center p-1 w-full minimum_width">
                  <div className=" font-bold cursor-pointer">
                    {ele?.ex.availableToBack[1].price}
                  </div>
                  <div className="text-[10px] cursor-pointer">
                    {ele?.ex.availableToBack[1].size}
                  </div>
                </div>
                <div className="bg-[#72bbef] text-center p-1 w-full minimum_width">
                  <div className=" font-bold cursor-pointer">
                    {ele?.ex.availableToBack[2].price}
                  </div>
                  <div className="text-[10px] cursor-pointer">
                    {ele?.ex.availableToBack[2].size}
                  </div>
                </div>
              </div>

              <div
                className="col-span-3 flex gap-[2px]"
                // onClick={() => dispatch(handelColor("#faa9ba"))}
              >
                <div className="bg-[#faa9ba] text-center p-1 sm:w-full minimum_width">
                  <div className=" font-bold cursor-pointer">
                    {ele?.ex.availableToLay[0].price}
                  </div>
                  <div className="text-[10px] cursor-pointer">
                    {ele?.ex.availableToLay[0].size}
                  </div>
                </div>
                <div className="bg-[#f8bcc8] text-center p-1 w-full minimum_width">
                  <div className=" font-bold cursor-pointer">
                    {ele?.ex.availableToLay[1].price}
                  </div>
                  <div className="text-[10px] cursor-pointer">
                    {ele?.ex.availableToLay[1].size}
                  </div>
                </div>
                <div className="bg-[#f6ced6] text-center p-1 md:w-full minimum_width">
                  <div className=" font-bold cursor-pointer">
                    {ele?.ex.availableToLay[2].price}
                  </div>
                  <div className="text-[10px] cursor-pointer">
                    {ele?.ex.availableToLay[2].size}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
}

export default EventAllMatch;

// <div className="main_div  mt-3">
// <table className="table">
//   <tbody>
//     <tr
//       style={{ border: " 1.98px solid #d2d2d2" }}
//       className="hover_effect"
//     >
//       <td className="d-flex remove_border  justify-content-between ">
//         <div className="flex-1">
//           {allData?.eventName.split("/")[0].split(" v ")[0]}
//         </div>
//       </td>
//       <td className="bluecolor1 w-63">
//         <strong>{data?.t1?.b1}</strong>
//         <strong>-</strong>
//       </td>
//       <td className="w-63 bluecolor1 text-center">
//         <strong>-</strong>
//       </td>
//       <td className="w-63 darkblue">
//         <strong
//           className="fw"
//           onClick={(e) =>
//             dispatch(handleOddPointToggle([e.target.innerText, true]))
//           }
//         >
//           {allData.back1}
//         </strong>
//         <div
//           className="fw"
//           onClick={(e) =>
//             dispatch(handleOddPointToggle([e.target.innerText, true]))
//           }
//         >
//           {allData?.data?.back1}
//         </div>
//       </td>
//       <td className="w-63 darkpink text-center">
//         <strong>-</strong>
//       </td>
//       <td className="w-63 redcolor">
//         <strong>-</strong>
//       </td>
//       <td className="w-63 redcolor text-center">
//         <strong>-</strong>
//       </td>
//     </tr>

//     <tr
//       style={{ border: " 1.98px solid #d2d2d2" }}
//       className="hover_effect"
//     >
//       <td className="d-flex remove_border  justify-content-between ">
//         <div className="flex-1">
//           {allData?.eventName.split("/")[0].split(" v ")[1]}
//         </div>
//       </td>
//       <td className="bluecolor1 w-63">
//         <strong>-</strong>
//       </td>
//       <td className="w-63 bluecolor1 text-center">
//         <strong>-</strong>
//       </td>
//       <td className="w-63 darkblue">
//         <strong>-</strong>
//       </td>
//       <td className="w-63 darkpink text-center">
//         <strong className="fw">{allData?.data?.lay1}</strong>
//         <div
//           className="fw"
//           onClick={(e) =>
//             dispatch(handleOddPointToggle([e.target.innerText, true]))
//           }
//         >
//           {allData?.data?.lay11}
//         </div>
//       </td>
//       <td className="w-63 redcolor">
//         <strong>-</strong>
//       </td>
//       <td className="w-63 redcolor text-center">
//         <strong>-</strong>
//       </td>
//     </tr>
//   </tbody>
// </table>
// </div>
