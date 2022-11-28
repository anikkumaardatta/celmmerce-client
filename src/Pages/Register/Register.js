import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import googleLogo from "../../assets/logo/google30.png";
import { useForm } from "react-hook-form";

const Register = () => {
  const { user, createUser, updateUser, googleSignIn } =
    useContext(AuthContext);
  const imgHostKey = process.env.REACT_APP_imgbb_key;
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const [data, setData] = useState("");
  const [error, setError] = useState("");
  const [img, setImg] = useState(null);
  const [imgLoad, setImgLoad] = useState(null);
  const [imgURL, setImgURL] = useState(null);
  const [userInfo, setUserInfo] = useState([]);

  console.log(user);

  const handleRegister = (userData) => {
    const userPhoto = userData.userImage[0];

    const formData = new FormData();
    formData.append("image", userPhoto);

    const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        console.log(imgData);
        if (imgData.success) {
          setImgURL(imgData.data.url);
          if (imgURL) {
            const userObj = {
              userName: userData.userName,
              userEmail: userData.userEmail,
              userImage: imgURL,
              userType: userData.category,
              isVerified: false,
            };
            // Set user info to the DB
            fetch(`http://localhost:5000/users`, {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(userObj),
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
              });
            const { userEmail, password } = userData;
            createUser(userEmail, password)
              .then((userCredential) => {
                const user = userCredential.user;
                updateUser(userData.userName, imgData.data.url)
                  .then(() => {
                    console.log("success");
                  })
                  .catch((error) => {
                    setError(error.message);
                    console.log(error);
                  });
              })
              .catch((error) => {
                console.log(error);
                // ..
              });
          }
        }
      });
    //   set user info
    // console.log("User Info:", user);
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
              <span className="label-text">Name</span>
            </label>
            <input
              {...register("userName", { required: true })}
              type="text"
              placeholder="User Name"
              className="input input-bordered focus:ring focus:ring-violet-300"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("userEmail", { required: true })}
              type="email"
              placeholder="Email"
              className="input input-bordered focus:ring focus:ring-violet-300"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              {...register("password", { required: true })}
              type="password"
              placeholder="Password"
              className="input input-bordered focus:ring focus:ring-violet-300"
            />
          </div>
          <div className="form-control flex flex-col md:flex-row">
            <div>
              <label className="label">
                <span className="label-text">
                  Choose profile photo (Required)
                </span>
              </label>
              <label className="block btn btn-ghost  focus:ring focus:ring-violet-300 mr-2">
                <input
                  {...register("userImage", { required: true })}
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
          <p className="my-2 mx-1">
            Already registered?{" "}
            <Link className="btn-link" to="/login">
              Login Now
            </Link>
          </p>
          <button className="btn btn-primary" type="submit">
            Create
          </button>
          <div className="divider">OR</div>
          <p>{data}</p>
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
