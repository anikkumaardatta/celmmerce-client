import React, { useEffect, useState } from "react";
import AdvertisedItem from "./AdvertisedItem/AdvertisedItem";

const AdvertisedItems = () => {
  const [loading, setLoading] = useState(true);
  const [advertisedItems, setAdvertisedItems] = useState([]);

  useEffect(() => {
    fetch("https://celmmerce-server.vercel.app/advertisedItems")
      .then((res) => res.json())
      .then((data) => {
        setAdvertisedItems(data);
        setLoading(false)
      });
  }, []);

  return (
    <div className="mt-20 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-2xl font-bold text-primary">Advertised Items</h1>
      </div>

      {
        loading ? 
        <progress className="progress w-full progress-primary"></progress>
        :
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mx-5">
        {advertisedItems.map((advertisedItem) => (
          <AdvertisedItem
            key={advertisedItem._id}
            advertisedItem={advertisedItem}
          ></AdvertisedItem>
        ))}
      </div>
      }
    </div>
  );
};

export default AdvertisedItems;
