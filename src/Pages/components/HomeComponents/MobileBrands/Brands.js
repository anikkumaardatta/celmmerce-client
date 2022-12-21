import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import Brand from "./Brand";

const Brands = () => {
  const [loading, setLoading] = useState(true);
  const [brandsData, setBrandsData] = useState([]);

  useEffect(() => {
    fetch("https://celmmerce-server.vercel.app/brands")
      .then((res) => res.json())
      .then((data) => {
        setBrandsData(data)
        setLoading(false);
      })
    
  }, []);

  return (
    <div>
      <div className="mt-20 max-w-6xl mx-auto">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-primary">Product Brands</h1>
          <p className="">Select a mobile brand</p>
        </div>

        {
          loading ?
          <progress className="progress w-full progress-primary"></progress>
      
        :
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-5">
          {brandsData.map((brandData) => (
            <Brand key={brandData._id} brandData={brandData}></Brand>
          ))}
        </div>
        }
      </div>
    </div>
  );
};

export default Brands;
