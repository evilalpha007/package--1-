import React from "react";

const Master = () => {
  return (
    <div>
      <div className=" first-sec ">
        {/* <img src="./testback.jpg" className='back_img' alt="" /> */}

        <form action="" className="form-container">
          <figure>
            <img src="./legalplay.png" alt="" />
            <figcaption className="text-white text-center mt-2">
              Master Account
            </figcaption>
          </figure>
          <div className="formItems">
            <input type="text" placeholder="username" className="username" />
            <input
              type="password"
              placeholder="password"
              className="username mt-2 mb-2"
            />
          </div>
          <button className="text-center loginbutton my3">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Master;
