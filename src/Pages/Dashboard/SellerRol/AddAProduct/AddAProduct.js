import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../Context/AuthProvider/AuthProvider";

const AddAProduct = () => {
  const { user } = useContext(AuthContext);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleAddProduct = (data) => {
    console.log(data);
    const productInfo = {
      sellerName: user?.displayName,
      sellerEmail: user?.email,
      sellerPhoto: user?.photoURL,
      // productName:
    };
  };
  console.log(user);
  return (
    <div className="m-5">
      <h1 className="text-2xl">Add A Product</h1>
      <div>
        <form
          className="card-body pt-0"
          onSubmit={handleSubmit(handleAddProduct)}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
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
                disabled
              />
            </div>
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
                disabled
              />
            </div>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="form-control flex flex-col md:flex-row">
              <div className="mr-4">
                <label className="label">
                  <span className="label-text"> Brand</span>
                </label>

                <select
                  className="select select-bordered"
                  {...register("brandCategory", { required: true })}
                >
                  <option value="" disabled>
                    Select Brand
                  </option>
                  <option value="iphone">iPhone</option>
                  <option value="samsung">Samsung</option>
                  <option value="xiaomi">Xiaomi</option>
                </select>
              </div>
              <div>
                <label className="label">
                  {errors.userImage ? (
                    <span className="label-text text-pink-600" role="alert">
                      {errors.userImage?.message}
                    </span>
                  ) : (
                    <span className="label-text">Product photo</span>
                  )}
                </label>
                <label className="block btn btn-ghost border border-double border-xl border-gray-300 focus:ring focus:ring-violet-300">
                  <input
                    {...register("ProductImg", {
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
                <span className="label-text"> Condition</span>
              </label>

              <select
                className="select select-bordered"
                {...register("condition", { required: true })}
              >
                <option value="" disabled>
                  Select Brand
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
                <span className="label-text">Description</span>
              </label>
              <textarea
                className="textarea textarea-bordered h-36"
                placeholder="Description"
              ></textarea>
            </div>
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
