import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import googleLogo from "../../assets/logo/google30.png";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { async } from "@firebase/util";

const Register = () => {
  const {
    user,
    userDataInfo,
    setUserDataInfo,
    createUser,
    updateUser,
    googleSignIn,
  } = useContext(AuthContext);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const navigate = useNavigate();
  // States
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const getUserToken = (email) => {
    fetch(`https://celmmerce-server.vercel.app/jwt?email=${email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.accessToken) {
          localStorage.setItem("accessToken", data.accessToken);
          navigate("/");
        }
      });
  };

  const saveUserToDB = async (userObj) => {
    fetch(`https://celmmerce-server.vercel.app/users`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userObj),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          getUserToken(userObj.userEmail);
        }
      });
  };

  const handleRegister = async (userData) => {
    console.log("UserData", userData.userImage[0]);
    const userPhoto = userData.userImage[0];

    const formData = new FormData();
    formData.append("image", userPhoto);

    const imgHostKey = process.env.REACT_APP_imgbb_key;

    const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`;

    try {
      setLoading(true);
      const res = await fetch(url, {
        method: "POST",
        body: formData,
      });

      const imgData = await res.json();
      console.log(imgData);
      if (imgData.success) {
        if (imgData.data.url) {
          setError("");
          const userCredential = await createUser(
            userData.userEmail,
            userData.password
          );
          const user = userCredential.user;
          toast("User created successfully");

          const userInfo = {
            displayName: userData.userName,
            photoURL: imgData.data.url,
          };

          const result = await updateUser(userInfo);
          const userObj = {
            userName: userData.userName,
            userEmail: userData.userEmail,
            userType: userData.category,
            isVerified: false,
          };
          localStorage.setItem("userDataInfo", JSON.stringify(userObj));
          setUserDataInfo(userObj);
          const savedResult = await saveUserToDB(userObj);
          console.log("savedResult: ", savedResult);
          setLoading(false);
        }
      }
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
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
          Register
        </h4>
        <form
          className="card-body pt-0"
          onSubmit={handleSubmit(handleRegister)}
        >
          <div className="form-control">
            <label className="label">
              {errors.userName ? (
                <span className="label-text text-pink-600" role="alert">
                  {errors.userName?.message}
                </span>
              ) : (
                <span className="label-text">Name</span>
              )}
            </label>
            <input
              {...register("userName", { required: "Username is required" })}
              type="text"
              placeholder="User Name"
              className="input input-bordered focus:ring focus:ring-violet-300"
            />
          </div>
          <div className="form-control">
            <label className="label">
              {errors.userEmail ? (
                <span className="label-text text-pink-600" role="alert">
                  {errors.userEmail?.message}
                </span>
              ) : (
                <span className="label-text">Email</span>
              )}
            </label>
            <input
              {...register("userEmail", { required: "Email is required" })}
              type="email"
              placeholder="Email"
              className="input input-bordered focus:ring focus:ring-violet-300"
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
              {...register("password", {
                required: "Please Eater password",
                minLength: {
                  value: 6,
                  message: "Password must be 6 characters long",
                },
              })}
              type="password"
              placeholder="Password"
              className="input input-bordered focus:ring focus:ring-violet-300"
            />
          </div>
          <div className="form-control flex flex-col md:flex-row">
            <div>
              <label className="label">
                {errors.userImage ? (
                  <span className="label-text text-pink-600" role="alert">
                    {errors.userImage?.message}
                  </span>
                ) : (
                  <span className="label-text">Profile photo</span>
                )}
              </label>
              <label className="block btn btn-ghost border border-double border-xl border-gray-300 focus:ring focus:ring-violet-300 mr-2">
                <input
                  {...register("userImage", {
                    required: "Choose profile photo (Required)",
                  })}
                  type="file"
                  className="block w-full my-1 text-sm cursor-pointer
                    text-slate-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-violet-50
                    file:text-violet-700
                    hover:file:bg-violet-100 
    "
                />
              </label>
            </div>
            <div>
              <label className="label">
                <span className="label-text">User type</span>
              </label>
              <select
                className="select select-bordered"
                {...register("category", { required: true })}
              >
                <option value="buyer">Buyer</option>
                <option value="seller">Seller</option>
              </select>
            </div>
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
              Already registered?{" "}
              <Link className="btn-link" to="/login">
                Login Now
              </Link>
            </p>
          )}

          {loading ? (
            <button className="btn btn-primary loading" type="button" disabled>
              Creating
            </button>
          ) : (
            <button className="btn btn-primary" type="submit">
              Create
            </button>
          )}
          <div className="divider">OR</div>
          {/* <p>{data}</p> */}
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

export default Register;
