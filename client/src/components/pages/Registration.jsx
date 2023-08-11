import React from "react";
import { Link } from "react-router-dom";

const Registration = () => {
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
            <span className="btn join-item btn-secondary">BD</span>
            <input
              type="text"
              defaultValue={"+880"}
              className="join-item input input-bordered input-primary w-full max-w-xs"
            />
          </div>
          <input
            type="password"
            placeholder="Enter password"
            className="input input-bordered input-primary w-full max-w-xs"
          />
          <input
            type="password"
            placeholder="Confirm password"
            className="input input-bordered input-primary w-full max-w-xs"
          />
          <p className="text-xs px-2">
            Already have an account?{" "}
            <Link to="/login" className="link-hover link-info">
              Login
            </Link>
          </p>
          <button className="btn btn-info">Sign up</button>
        </div>
      </div>
    </div>
  );
};

export default Registration;
