import React from "react";

const MyOrder = ({ myOrder }) => {
  const { productIMG, productName, price } = myOrder;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={productIMG} alt="Shoes" className="rounded-xl w-40" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{productName}</h2>
        <p className="text-lg font-semibold">
          Price: <span className="font-bold text-violet-700">${price}</span>
        </p>
        <div className="card-actions"></div>
      </div>
    </div>
  );
};

export default MyOrder;
