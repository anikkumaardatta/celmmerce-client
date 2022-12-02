import React from "react";
import { Link } from "react-router-dom";

const AdvertisedItem = ({ advertisedItem }) => {
  const { brandCategory, picture, productName, resellPrice } = advertisedItem;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={picture} alt="Shoes" className="rounded-xl bg-stone-200" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{productName}</h2>
        <p className="text-lg font-semibold">
          Price:{" "}
          <span className="font-bold text-violet-700">${resellPrice}</span>
        </p>
        <div className="card-actions">
          <Link to={`/brand/${brandCategory}`}>
            <button className="btn btn-secondary">View More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdvertisedItem;
