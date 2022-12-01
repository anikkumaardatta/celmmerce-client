import React from "react";
import { useLoaderData } from "react-router-dom";
import BrandCategory from "../BrandCategory";

const Xiaomi = () => {
  const products = useLoaderData();
  console.log(products);
  return <BrandCategory products={products}></BrandCategory>;
};

export default Xiaomi;
