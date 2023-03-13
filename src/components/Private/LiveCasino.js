import React from "react";

const LiveCasino = () => {
  return (
    <div>
      {[1, 2, 3, 4].map((ele, i) => {
        return (
          <div key={i} className="row margin_less mb-2">
            sdasd
            <div className="col-sm-2 col-lg-3 col-3">
              <a href="#">
                <img
                  src="./image/casino/casino1.jpg"
                  className="img_150px"
                  alt=""
                />
              </a>
            </div>
            <div className="col-sm-2 col-lg-3 col-3">
              <a href="#">
                <img
                  src="./image/casino/casino2.jpg"
                  className="img_150px"
                  alt=""
                />
              </a>
            </div>
            <div className="col-sm-2 col-lg-3 col-3">
              <a href="#">
                <img
                  src="./image/casino/casino3.jpg"
                  className="img_150px"
                  alt=""
                />
              </a>
            </div>
            <div className="col-sm-2 col-lg-3 col-3">
              <a href="#">
                <img
                  src="./image/casino/casino4.jpg"
                  className="img_150px"
                  alt=""
                />
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LiveCasino;
