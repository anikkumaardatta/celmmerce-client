import React from "react";
import { useLoaderData } from "react-router-dom";
import BrandCategory from "../BrandCategory";
import Product from "../Product";

const Iphone = () => {
  const products = useLoaderData();
  console.log(products);
  return (
    <BrandCategory products={products}></BrandCategory>
    // <div className="max-w-6xl mx-auto">
    //   <h1 className="text-3xl font-semibold text-violet-500 m-12">
    //     Total {products.length} products of this item.
    //   </h1>
    //   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
    //     {products.map((product) => (
    //       <Product
    //         key={product._id}
    //         product={product}
    //         // setProductData={setProductData}
    //       ></Product>
    //     ))}
    //   </div>
    // </div>
  );
};

export default Iphone;
