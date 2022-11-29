import React, { useState } from "react";
import ipXS from "../../assets/brand/iPhone/ip_xs_max.png";
import ip12 from "../../assets/brand/iPhone/ip_12_p_max.png";
import ip13 from "../../assets/brand/iPhone/ip_13_p.png";
import sellerPhoto from "../../assets/user3.jpg";

import Product from "./Product";
import BuyModal from "../components/ProductComponent/BuyModal/BuyModal";

const products = [
  {
    id: 1,
    picture: "https://i.ibb.co/q09pQfy/ip-13-p.png",
    productName: "Phone 13 Pro",
    resalePrice: "80000",
    originalPrice: "105000",
    yearsOfUse: "1year",
    condition: "Good",
    contactNumber: "01970192772",
    publishDate: "27th Nov 2022",
    description:
      "Portrait mode with advanced bokeh and Depth Control, Portrait Lighting with six effects (Natural, Studio, Contour, Stage, Stage Mono, High‑Key Mono), Animoji and Memoji, Night mode, Deep Fusion, Smart HDR 4,",

    sellerName: "Jimy Rexiana",
    sellerImg: "https://i.ibb.co/nktJ0HX/user6.jpg",
    location: "Chashara, Narayanganj",
    contactNumber: "01970192772",
  },
  {
    id: 2,
    picture: "https://i.ibb.co/gJ7DMzN/ip-xs-max.png",
    productName: "Phone XS Max",
    location: "Deovog, Narayanganj",
    resalePrice: "30000",
    originalPrice: "75000",
    yearsOfUse: "1year",
    condition: "Fair",
    contactNumber: "01970192772",
    publishDate: "21th Nov 2022",
    description:
      "Portrait mode with advanced bokeh and Depth Control, Portrait Lighting with six effects (Natural, Studio, Contour, Stage, Stage Mono, High‑Key Mono), Animoji and Memoji, Night mode, Deep Fusion, Smart HDR 4,",

    contactNumber: "01970192772",
    sellerName: "Bay Joe",
    sellerImg: "https://i.ibb.co/XLhhg6J/user3.jpg",
  },
  {
    id: 3,
    picture: "https://i.ibb.co/Ydjw3pg/ip-12-p-max.png",
    productName: "Phone 12 Pro Max",
    location: "Mirpur, Dhaka",
    resalePrice: "90000",
    originalPrice: "105000",
    yearsOfUse: "1year",
    condition: "Excellent",
    publishDate: "14th Nov 2022",
    description:
      "Portrait mode with advanced bokeh and Depth Control, Portrait Lighting with six effects (Natural, Studio, Contour, Stage, Stage Mono, High‑Key Mono), Animoji and Memoji, Night mode, Deep Fusion, Smart HDR 4,",

    contactNumber: "01970192772",
    sellerName: "Bay Joe",
    sellerImg: "https://i.ibb.co/XLhhg6J/user3.jpg",
  },
];

const BrandCategory = () => {
  const [productData, setProductData] = useState(null);
  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            setProductData={setProductData}
          ></Product>
        ))}
      </div>
      {productData && <BuyModal productData={productData}></BuyModal>}
    </div>
  );
};

export default BrandCategory;
