import React from "react";
import { FaCertificate } from "react-icons/fa";

const Product = ({ product, setProductData }) => {
  const {
    picture,
    productName,
    location,
    description,
    resalePrice,
    originalPrice,
    yearsOfUse,
    condition,
    sellerName,
    sellerImg,
    contactNumber,
    publishDate,
  } = product;

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={picture}
          alt={productName}
          className="rounded-xl bg-slate-200"
        />
      </figure>
      <div className="card-body">
        <hr />
        <h2 className="card-title text-center">{productName}</h2>
        <p className="text-xs text-gray-400">{publishDate}</p>
        <p className="text-sm">
          Market Price:{" "}
          <span className="line-through font-bold text-violet-400">
            ${originalPrice}
          </span>
        </p>
        <p className="text-md font-semibold">
          Price:{" "}
          <span className="font-bold text-violet-700">${resalePrice}</span>
        </p>
        <p className="text-sm">Years Of Use: {yearsOfUse}</p>
        <p className="text-sm text-violet-700">{location}</p>
        <p className="text-sm text-violet-700">Condition: {condition}</p>
        <hr />
        <div className="seller-info">
          <div className="profile flex flex-row align-middle items-center ">
            <div className="avatar">
              <div className="w-12 rounded-full">
                <img src={sellerImg} />
              </div>
            </div>
            <div className="ml-2 my-2 mb-4">
              <div className="flex flex-row items-center justify-center">
                <h3 className="text-md font-semibold inline-block mr-2">
                  {sellerName}{" "}
                </h3>{" "}
                <FaCertificate className="text-violet-500"></FaCertificate>
              </div>
              <p className="text-xs">{contactNumber}</p>
            </div>
          </div>

          <p className="text-xs">Description: {description.slice(0, 85)}</p>
        </div>
        <div className="card-actions">
          {/* The button to open modal */}
          <label
            onClick={() => setProductData(product)}
            htmlFor="buy-modal"
            className="btn btn-primary"
          >
            Buy Now
          </label>
        </div>
      </div>
    </div>
  );
};

export default Product;
