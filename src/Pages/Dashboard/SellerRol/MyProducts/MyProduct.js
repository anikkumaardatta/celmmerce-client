import React, { useState } from "react";

const MyProduct = ({ myProduct, handleAdvertise }) => {
  const { _id, picture, productName, publishDate, resellPrice, isAdvertise } =
    myProduct;

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={picture} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl">
          {productName}
          {isAdvertise && (
            <div className="badge badge-secondary">Advertised</div>
          )}
        </h2>
        <div className="text-xl text-primary font-semibold">${resellPrice}</div>
        <p className="text-xs font-medium text-gray-500">
          PublishDate: {publishDate}
        </p>
        <div className="card-actions justify-center">
          {!isAdvertise && (
            <div
              onClick={() => handleAdvertise(_id)}
              className="btn btn-outline btn-primary w-full mt-3"
            >
              Advertise
            </div>
          )}
          <div className="btn btn-outline btn-error w-full mt-3">Delete</div>
        </div>
      </div>
    </div>
  );
};

export default MyProduct;
