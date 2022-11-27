import React from "react";
import googleLogo from "../../assets/logo/google30.png";

const Login = () => {
  return (
    <div className="p-5 bg-base-200">
      <div className="hero min-h-screen">
        <div className="card max-w-xl w-full shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
              <div className="form-control flex flex-row justify-center mt-5">
                <label className="label cursor-pointer">
                  <span className="label-text text-lg font-semibold text-violet-600">
                    Seller
                  </span>
                  <input
                    type="radio"
                    name="radio-10"
                    className="radio mx-2 checked:bg-violet-600"
                  />
                </label>
                <label className="label cursor-pointer">
                  <span className="label-text text-lg font-semibold text-indigo-800">
                    Buyer
                  </span>
                  <input
                    type="radio"
                    name="radio-10"
                    className="radio mx-2 checked:bg-indigo-800"
                    checked
                  />
                </label>
              </div>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-ghost">
                <img src={googleLogo} className="mx-2" alt="" />
                Sign In With Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
