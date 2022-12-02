import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../Context/AuthProvider/AuthProvider";
import MyProduct from "./MyProduct";

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [myProducts, setMyProducts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/products?seller=${user.uid}`)
      .then((res) => res.json())
      .then((data) => setMyProducts(data));
  }, []);

  // const { data: myProducts = [] } = useQuery({
  //   queryKey: ["brandsData"],
  //   queryFn: () =>
  //     fetch(`http://localhost:5000/products?seller=${user.uid}`).then((res) =>
  //       res.json()
  //     ),
  // });

  const handleAdvertise = (_id, updateProduct) => {
    setLoading(true);
    // Get Product
    fetch(`http://localhost:5000/product?id=${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          navigate("/");
        }
      });
  };
  const handleDelete = (_id) => {
    const confirm = window.confirm("Are you sure to delete?");
    if (confirm) {
      fetch(`http://localhost:5000/products/delete?productID=${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount === 1) {
            toast("Deleted successfully");
            const remaining = myProducts.filter(
              (myProduct) => myProduct._id !== _id
            );
            setMyProducts(remaining);
          }
        });
    }
  };

  return (
    <div className="mx-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {myProducts.map((myProduct) => (
          <MyProduct
            key={myProduct._id}
            myProduct={myProduct}
            handleAdvertise={handleAdvertise}
            handleDelete={handleDelete}
          ></MyProduct>
        ))}
      </div>
    </div>
  );
};

export default MyProducts;
