import React from "react";
import { Link } from "react-router-dom";

const Brand = ({ brandData }) => {
  const { name, brandLogo } = brandData;
  return (
    <div className="card shadow-xl">
      <figure className="px-10 pt-10">
        <img src={brandLogo} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <div className="card-actions">
          <Link to={`/brand/${name.toLowerCase()}`}>
            <button className="btn btn-primary">Products</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Brand;
