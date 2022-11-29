import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import Brand from "./Brand";

const Brands = () => {
  const { data: brandsData = [] } = useQuery({
    queryKey: ["brandsData"],
    queryFn: () =>
      fetch("http://localhost:5000/brands").then((res) => res.json()),
  });

  return (
    <div className="mt-20 max-w-6xl mx-auto">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-primary">Product Brands</h1>
        <p className="">Select a mobile brand</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-5">
        {brandsData.map((brandData) => (
          <Brand key={brandData._id} brandData={brandData}></Brand>
        ))}
      </div>
    </div>
  );
};

export default Brands;
