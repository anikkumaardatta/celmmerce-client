import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../../../Context/AuthProvider/AuthProvider";
import MyProduct from "./MyProduct";

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const { data: myProducts = [] } = useQuery({
    queryKey: ["brandsData"],
    queryFn: () =>
      fetch(`http://localhost:5000/products?seller=${user.uid}`).then((res) =>
        res.json()
      ),
  });
  console.log(myProducts);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {myProducts.map((myProduct) => (
          <MyProduct key={myProduct._id} myProduct={myProduct}></MyProduct>
        ))}
      </div>
    </div>
  );
};

export default MyProducts;
