import React from "react";
import "react-phone-input-2/lib/style.css";
import { Link, useNavigate } from "react-router-dom";
import users from "../../assets/data/users.json";
import axios from "axios";
import useUtil from "../../hooks/useUtil";

const Login = () => {
  const { setLogin } = useUtil();
  const [number, setNumber] = React.useState("+880");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const navigate = useNavigate();
  const countryCodeHandler = () => {
    setNumber("+880" + number);
  };

  const loginHandler = () => {
    const bangladeshiPhoneNumberRegex = /^\+8801[3-9]\d{8}$/;
    const verifyNumber = bangladeshiPhoneNumberRegex.test(number);
    if (verifyNumber && password.length > 0) {
      setError(false);
      const checkUser = users.find(
        (user) => user.number === number && user.password === password
      );
      if (checkUser) {
        setSuccess(true);
        setError(false);
        setLogin();
        setTimeout(() => {
          navigate("/");
        }, 500);
      } else {
        setSuccess(false);
        setError(true);
      }
    } else {
      setSuccess(false);
      setError(true);
    }
  };
  return (
    <div className="lg:w-9/12 p-5 m-auto">
      <div className="flex justify-center items-center h-[75vh]">
        <div className="flex flex-col items-start gap-3 bg-white shadow-lg md:px-10 px-5 py-10 rounded-lg">
          <figure className="w-[200px] m-auto mb-5">
            <img
              src="https://chswebapps.co.uk/auth/ZYzTdD0.png"
              alt="login logo"
            />
          </figure>
          <div className="join">
            <span
              className="btn join-item btn-secondary"
              onClick={countryCodeHandler}
            >
              BD
            </span>
            <input
              type="tel"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              className="join-item input input-bordered input-primary w-full max-w-xs"
            />
          </div>
          <input
            type="password"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
            className="input input-bordered input-primary w-full max-w-xs"
          />
          <p className="text-xs px-2">
            Don't have an account?{" "}
            <Link to="/registration" className="link-hover link-info">
              Register
            </Link>
          </p>
          {error && (
            <div className="alert alert-error">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Error! Invalid phone number.</span>
            </div>
          )}
          {success && (
            <div className="alert alert-success">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Successfully loged in</span>
            </div>
          )}
          <button className="btn btn-info" onClick={loginHandler}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
