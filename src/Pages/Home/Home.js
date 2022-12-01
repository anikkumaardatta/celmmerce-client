import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import Banner from "../components/HomeComponents/Banner/Banner";
import Brands from "../components/HomeComponents/MobileBrands/Brands";

const Home = () => {
  const { user, loading } = useContext(AuthContext);
  console.log("USER FROM HOME: ", user);

  return (
    <div>
      <Banner></Banner>
      <Brands></Brands>
    </div>
  );
};

export default Home;
