import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../../Context/AuthProvider/AuthProvider";
import MyOrder from "../MyOrder/MyOrder";
//
const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const { data: myOrders = [] } = useQuery({
    queryKey: ["brandsData"],
    queryFn: () =>
      fetch(
        `https://celmmerce-server.vercel.app/orders?buyerID=${user.uid}`
      ).then((res) => res.json()),
  });
  console.log(myOrders);
  return (
    <div className="mx-5">
      <h1 className="text-3xl font-semibold text-violet-500 m-12">
        You have {myOrders.length} orders.
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {myOrders.map((myOrder) => (
          <MyOrder key={myOrder._id} myOrder={myOrder}></MyOrder>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
