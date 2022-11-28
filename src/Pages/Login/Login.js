import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import googleLogo from "../../assets/logo/google30.png";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const Login = () => {
  const { googleSignIn } = useContext(AuthContext);

  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");
  const [error, setError] = useState("");

  //   const navigate = useNavigate();
  //   const location = useLocation();

  const handleLogin = (userData) => {
    console.log(userData);
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        // navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="p-5 bg-base-200">
      <div className="card max-w-md mx-auto w-full shadow-2xl bg-base-100">
        <h4 className="text-2xl font-bold text-slate-600 text-center mt-5">
          Login
        </h4>
        <form className="card-body pt-0" onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("email")}
              type="email"
              placeholder="Email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              {...register("password")}
              type="password"
              placeholder="Password"
              className="input input-bordered"
            />
          </div>
          <p className="my-2 mx-1">
            New to Celmmerce?{" "}
            <Link className="btn-link" to="/register">
              Register Now
            </Link>
          </p>
          <button className="btn btn-primary" type="submit">
            Login
          </button>
          <div className="divider">OR</div>
          <button
            onClick={handleGoogleSignIn}
            className="btn btn-ghost text-lg"
            type="submit"
          >
            <img src={googleLogo} className="mx-1" alt="" /> Sign In With Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
