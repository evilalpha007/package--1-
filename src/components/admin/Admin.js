import React from "react";
import { useDispatch } from "react-redux";
import { handelLogin } from "../../store/features/authSlice";

const Admin = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <div className=" first-sec ">
          <form action="" className="form-container">
            <figure>
              <img src="./legalplay.png" alt="" />
              <figcaption className="text-white text-center mt-2">
                Admin Account
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
            <button
              className="text-center loginbutton my3"
              onClick={() => dispatch(handelLogin({ adminLogin: true }))}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Admin;
