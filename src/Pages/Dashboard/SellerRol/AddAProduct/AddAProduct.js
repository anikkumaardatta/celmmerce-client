import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../Context/AuthProvider/AuthProvider";

const AddAProduct = () => {
  const { user, userDataInfo } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    sellerName: user?.displayName,
    sellerEmail: user?.email,
  });

  const onSubmit = async (data) => {
    const productImg = data.productImg[0];
    const formData = new FormData();

    const saveProductToDB = async (userObj) => {
      fetch(`http://localhost:5000/products`, {
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
    };

    formData.append("image", productImg);

    const imgHostKey = process.env.REACT_APP_imgbb_key;

    const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`;
    console.log(imgHostKey);
    try {
      setLoading(true);
      fetch(url, {
        method: "POST",
        body: formData,
      });
      const res = await fetch(url, {
        method: "POST",
        body: formData,
      });

      const imgData = await res.json();
      if (imgData.success) {
        console.log(user);
        console.log(data);
        const productData = {
          picture: imgData.data.url,
          productName: data.productName,
          brandCategory: data.brandCategory,

          resellPrice: data.resellPrice,
          originalPrice: data.marketPrice,
          yearsOfUse: data.usedDays,
          condition: data.condition,
          publishDate: new Date(),
          description: data.description,

          sellerName: user?.displayName,
          sellerImg: user?.photoURL,
          sellerEmail: user?.email,
          sellerLocation: data.sellerLocation,
          contactNumber: data.sellerPhone,
          sellerUID: user.uid,
          isVerified: userDataInfo.isVerified,
          isAdvertise: false,
        };
        saveProductToDB(productData);
      }
    } catch (error) {
      setLoading(false);
      console.log(error.message);
    }
  };
  return (
    <div className="m-5">
      <h1 className="text-2xl">Add A Product</h1>
      <div>
        <form className="card-body pt-0" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* sellerName */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                {...register("sellerName", {
                  required: "Username is required",
                })}
                type="text"
                placeholder="User Name"
                className="input input-bordered focus:ring focus:ring-violet-300"
                value={user?.displayName}
                readOnly
              />
            </div>
            {/* sellerEmail */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("sellerEmail", { required: "Email is required" })}
                type="text"
                placeholder="Email"
                className="input input-bordered focus:ring focus:ring-violet-300"
                value={user?.email}
                readOnly
              />
            </div>
            {/* sellerPhone */}
            <div className="form-control">
              <label className="label">
                {errors.sellerPhone ? (
                  <span className="label-text text-pink-600" role="alert">
                    {errors.sellerPhone?.message}
                  </span>
                ) : (
                  <span className="label-text">Phone</span>
                )}
              </label>
              <input
                {...register("sellerPhone", {
                  required: "Contact number is required",
                })}
                type="number"
                placeholder="+880"
                className="input input-bordered focus:ring focus:ring-violet-300"
              />
            </div>
          </div>
          {/* 1-brandCategory , productImg*/}
          {/* 2-productName */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="form-control flex flex-col justify-between  md:flex-row">
              <div className="">
                <label className="label">
                  {errors.brandCategory ? (
                    <span className="label-text text-pink-600" role="alert">
                      {errors.brandCategory?.message}
                    </span>
                  ) : (
                    <span className="label-text"> Brand</span>
                  )}
                </label>

                <select
                  className="select select-bordered w-40"
                  {...register("brandCategory", {
                    required: "Please select any brand.",
                  })}
                >
                  <option selected value="" disabled>
                    Select Brand
                  </option>
                  <option value="iphone">iPhone</option>
                  <option value="samsung">Samsung</option>
                  <option value="xiaomi">Xiaomi</option>
                </select>
              </div>
              <div>
                <label className="label">
                  {errors.productImg ? (
                    <span className="label-text text-pink-600" role="alert">
                      {errors.productImg?.message}
                    </span>
                  ) : (
                    <span className="label-text">Product photo</span>
                  )}
                </label>
                <label className="block btn btn-ghost border border-double border-xl border-gray-300 focus:ring focus:ring-violet-300">
                  <input
                    {...register("productImg", {
                      required: "Choose a product picture (Required)",
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
            </div>
            <div className="form-control">
              <label className="label">
                {errors.productName ? (
                  <span className="label-text text-pink-600" role="alert">
                    {errors.productName?.message}
                  </span>
                ) : (
                  <span className="label-text">Product Name</span>
                )}
              </label>
              <input
                {...register("productName", {
                  required: "Please Eater Product Name",
                })}
                type="text"
                placeholder="Product Name"
                className="input input-bordered focus:ring focus:ring-violet-300"
              />
            </div>
          </div>
          {/* 1-usedDays */}
          {/* 2-condition */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label">
                {errors.usedDays ? (
                  <span className="label-text text-pink-600" role="alert">
                    {errors.usedDays?.message}
                  </span>
                ) : (
                  <span className="label-text">How many day's used?</span>
                )}
              </label>
              <input
                {...register("usedDays", {
                  required: "Please Eater how many day's you have used?",
                })}
                type="text"
                placeholder="How many day's?"
                className="input input-bordered focus:ring focus:ring-violet-300"
              />
            </div>
            <div className="form-control">
              <label className="label">
                {errors.condition ? (
                  <span className="label-text text-pink-600" role="alert">
                    {errors.condition?.message}
                  </span>
                ) : (
                  <span className="label-text"> Condition</span>
                )}
              </label>

              <select
                className="select select-bordered"
                {...register("condition", {
                  required: "Please select Product Condition.",
                })}
              >
                <option selected value="" disabled>
                  Select Condition
                </option>
                <option value="Excellent">Excellent</option>
                <option value="Good">Good</option>
                <option value="Fair">Fair</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="grid grid-cols-1 gap-2">
              <div className="form-control">
                <label className="label">
                  {errors.marketPrice ? (
                    <span className="label-text text-pink-600" role="alert">
                      {errors.marketPrice?.message}
                    </span>
                  ) : (
                    <span className="label-text">Market Price</span>
                  )}
                </label>
                <input
                  {...register("marketPrice", {
                    required: "Please Eater original market price",
                  })}
                  type="number"
                  placeholder="Market Price"
                  className="input input-bordered focus:ring focus:ring-violet-300"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  {errors.resellPrice ? (
                    <span className="label-text text-pink-600" role="alert">
                      {errors.resellPrice?.message}
                    </span>
                  ) : (
                    <span className="label-text">Resell Price</span>
                  )}
                </label>
                <input
                  {...register("resellPrice", {
                    required: "Please Eater Resell Price",
                  })}
                  type="number"
                  placeholder="Resell Price"
                  className="input input-bordered focus:ring focus:ring-violet-300"
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                {errors.description ? (
                  <span className="label-text text-pink-600" role="alert">
                    {errors.description?.message}
                  </span>
                ) : (
                  <span className="label-text">Description</span>
                )}
              </label>
              <textarea
                {...register("description", {
                  required: "Please provide a description.",
                })}
                className="textarea textarea-bordered h-36"
                placeholder="Description"
              ></textarea>
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              {errors.sellerLocation ? (
                <span className="label-text text-pink-600" role="alert">
                  {errors.sellerLocation?.message}
                </span>
              ) : (
                <span className="label-text">Location</span>
              )}
            </label>
            <input
              {...register("sellerLocation", {
                required: "Please provide your location",
              })}
              type="text"
              placeholder="Location"
              className="input input-bordered focus:ring focus:ring-violet-300"
            />
          </div>
          <button className="btn btn-primary my-8" type="submit">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddAProduct;
