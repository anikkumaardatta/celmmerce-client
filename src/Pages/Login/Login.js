import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import googleLogo from "../../assets/logo/google30.png";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const Login = () => {
  const { signIn, googleSignIn } = useContext(AuthContext);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [data, setData] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (userData) => {
    console.log(userData);
    setError("");
    signIn(userData.email, userData.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        setError(error.message);
        console.log(error);
      });
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
              {errors.email ? (
                <span className="label-text text-pink-600" role="alert">
                  {errors.email?.message}
                </span>
              ) : (
                <span className="label-text">Email</span>
              )}
            </label>
            <input
              {...register("email", { required: "Email is required" })}
              type="email"
              placeholder="Email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              {errors.password ? (
                <span className="label-text text-pink-600" role="alert">
                  {errors.password?.message}
                </span>
              ) : (
                <span className="label-text">Password</span>
              )}
            </label>
            <input
              {...register("password", { required: "Please Eater password" })}
              type="password"
              placeholder="Password"
              className="input input-bordered"
            />
          </div>
          {error ? (
            <span className="text-pink-600 my-2 mx-1" role="alert">
              {error}

              <Link className="btn-link" to="/register">
                Register Now
              </Link>
            </span>
          ) : (
            <p className="my-2 mx-1">
              New to Celmmerce?{" "}
              <Link className="btn-link" to="/register">
                Register Now
              </Link>
            </p>
          )}
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
