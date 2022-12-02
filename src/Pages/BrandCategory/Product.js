import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { FaCertificate } from "react-icons/fa";
const Product = ({ product, setProductData }) => {
  const [loader, setLoader] = useState(true);
  const {
    brandCategory,
    picture,
    productName,
    condition,
    description,
    yearsOfUse,
    originalPrice,
    resellPrice,
    publishDate,
    sellerImg,
    sellerName,
    sellerLocation,
    sellerEmail,
    contactNumber,
    sellerUID,
    _id,
    isAdvertise,
    isSold,
  } = product;
  console.log("Products", product);
  const [sellerInfo, setSellerInfo] = useState({});
  useEffect(() => {
    setLoader(true);
    fetch(`http://localhost:5000/user?email=${sellerEmail}`)
      .then((res) => res.json())
      .then((data) => {
        setLoader(false);
        setSellerInfo(data);
      });
  }, []);
  // getSellerInfoFromDB(sellerEmai);
  console.log(sellerInfo.isVerified);
  // const sellerIsVerified = sellerInfo.isVerified;
  // const getSellerInfoFromDB = () => {
  //   fetch(`http://localhost:5000/user?email=${sellerEmail}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //     });
  // };

  return (
    <>
      {!isSold && (
        <>
          {loader ? (
            <>
              <div
                role="status"
                className="card bg-base-100 shadow-xl animate-pulse"
              >
                <div className="flex justify-center items-center mb-4 h-48 bg-gray-300 rounded">
                  <svg
                    className="w-12 h-12 text-gray-200"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 640 512"
                  >
                    <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
                  </svg>
                </div>
                <div className="m-5">
                  <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
                  <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full"></div>
                  <div className="flex items-center mt-4 space-x-3">
                    <svg
                      className="w-14 h-14 text-gray-300"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <div>
                      <div className="h-2.5 bg-gray-300 rounded-full w-32 mb-2"></div>
                      <div className="w-48 h-2 bg-gray-300 rounded-full"></div>
                    </div>
                  </div>
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            </>
          ) : (
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
                {isAdvertise && (
                  <div class="badge badge-secondary">Advertised</div>
                )}
                <p className="text-xs text-gray-400 font-medium">
                  PublishDate: {publishDate}
                </p>
                <p className="text-sm font-semibold">
                  Market Price:{" "}
                  <span className="line-through font-bold text-orange-500">
                    ${originalPrice}
                  </span>
                </p>
                <p className="text-lg font-semibold">
                  Price:{" "}
                  <span className="font-bold text-violet-700">
                    ${resellPrice}
                  </span>
                </p>
                <p className="text-sm font-semibold">
                  Years Of Use: {yearsOfUse}
                </p>
                <p className="text-sm text-violet-700 font-semibold">
                  {sellerLocation}
                </p>
                <p className="text-sm font-semibold">Condition: {condition}</p>
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
                        <h3 className="ml-0 text-md font-semibold inline-block mr-2">
                          {sellerName}{" "}
                        </h3>{" "}
                        {sellerInfo.isVerified && (
                          <FaCertificate className="text-violet-500"></FaCertificate>
                        )}
                      </div>
                      <p className="ml-0 text-xs font-semibold text-gray-500">
                        {sellerEmail}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs  font-medium text-gray-500">
                    Description: {description.slice(0, 85)}
                  </p>
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
          )}
        </>
      )}
    </>
  );
};

export default Product;
