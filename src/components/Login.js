import React from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { handelLogin } from "../store/features/authSlice";
const Login = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <div className=" first-sec ">
        <form action="" className="form-container">
          <figure>
            <img src="./legalplay.png" alt="" />
            <figcaption className="text-white text-center mt-2">
              Login
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
            onClick={() => {
              Navigate("/list");
            }}
          >
            Login
          </button>
          <button
            className="text-center loginbutton "
            onClick={() => dispatch(handelLogin({ login: true }))}
          >
            Login with demo id
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
