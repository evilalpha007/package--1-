import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { onChangeAsideActive } from "../../store/features/asideSlice";
const SideList = () => {
  const aside = useSelector((state) => state.asideState.aside);
  const dispatch = useDispatch();

  const routes = [
    {
      path: "/game-list/favorites",
      name: "Favorites",
      icon: <i className="fa-regular fa-star"></i>,
    },
    {
      path: "/game-list/cricket",
      name: "cricket",
      icon: (
        <img src="..//image/cricket_ball.png" className="img_width" alt="" />
      ),
    },
    {
      path: "/game-list/casino",
      name: "Live Casino",
      icon: (
        <img src="..//image/casino/caino.png" className="img_width" alt="" />
      ),
    },
    {
      path: "/game-list/soccer",
      name: "Soccer",
      icon: (
        <img src="..//image/horse_racing.jpg" className="img_width" alt="" />
      ),
    },
    {
      path: "/game-list/grey-hound-racing",
      name: "Greyhound Racing ",
      icon: <img src="..//image/greyhound.jpg" className="img_width" alt="" />,
    },
    {
      path: "/game-list/horse-racing",
      name: "HORSE RACING",
      icon: (
        <img src="..//image/horse_racing.jpg" className="img_width" alt="" />
      ),
    },
    {
      path: "/game-list/tennis",
      name: "Tennis  ",
      icon: <img src="..//image/teniss_bal.png" className="img_width" alt="" />,
    },
  ];

  return (
    <div>
      <div className="border_button">
        {routes.map(({ path, name, icon }) => (
          <div>
            <Link to={path} className="sidelist button-6 justify-content-start">
              {icon}
              {name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideList;

// <button
// className="sidelist button-6 justify-content-start"
// onClick={() => dispatch(onChangeAsideActive("Favorites"))}
// >
// <i className="fa-regular fa-star"></i>
// Favorites
// </button>
// <div>
// <button
//   className="sidelist button-6 justify-content-start"
//   onClick={() => dispatch(onChangeAsideActive("Cricket"))}
// >
//   <img src="./image/cricket_ball.png" className="img_width" alt="" />
//   Cricket
// </button>
// </div>
// <div>
// <button
//   className="sidelist button-6 justify-content-start"
//   onClick={() => dispatch(onChangeAsideActive("Greyhound Racing"))}
// >
//   <img src="./image/greyhound.jpg" className="img_width" alt="" />
//   Greyhound Racing
// </button>
// </div>
// <div>
// <button
//   className="sidelist button-6 justify-content-start"
//   onClick={() => dispatch(onChangeAsideActive("Horse Racing"))}
// >
//   <img src="./image/horse_racing.jpg" className="img_width" alt="" />
//   Horse Racing
// </button>
// </div>
// <div>
// <button
//   className="sidelist button-6 justify-content-start"
//   onClick={() => dispatch(onChangeAsideActive("Soccer"))}
// >
//   <img src="./image/soccer.webp" className="img_width" alt="" />
//   Soccer
// </button>
// </div>
// <div>
// <button
//   className="sidelist button-6 justify-content-start"
//   onClick={() => dispatch(onChangeAsideActive("Tennis"))}
// >
//   <img src="./image/Tennis_bal.png" className="img_width" alt="" />
//   Tennis
// </button>
// </div>
// <div>
// <button
//   className="sidelist button-6 justify-content-start"
//   onClick={() => dispatch(onChangeAsideActive("LiveCasino"))}
// >
//   <img src="./image/casino/caino.png" className="img_width" alt="" />
//   Live Casino
// </button>
// </div>
