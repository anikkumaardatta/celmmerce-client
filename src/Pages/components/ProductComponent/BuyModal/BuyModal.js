import React, { useContext } from "react";
import { AuthContext } from "../../../../Context/AuthProvider/AuthProvider";

const BuyModal = ({ productData }) => {
  const { user } = useContext(AuthContext);
  const {
    picture,
    productName,
    location,
    description,
    resalePrice,
    originalPrice,
    yearsOfUse,
    condition,
    sellerName,
    sellerImg,
    contactNumber,
    publishDate,
  } = productData;

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const product = productName;
    const price = resalePrice;
    const name = user.displayName;
    const email = user.email;
    const phone = form.phone.value;
    const location = form.location.value;
    console.log(product, price, name, email, phone, location);
  };
  return (
    <>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="buy-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="buy-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="flex flex-row my-6">
            <img
              src={picture}
              className="w-24 border border-double border-5 border-violet-400 bg-slate-200 rounded-lg"
              alt=""
            />
            <div className="ml-4">
              <h3 className="text-lg font-bold">{productName}</h3>
              <h3 className="text-lg font-bold text-violet-600">
                ${resalePrice}
              </h3>
              <p className="text-xs">{publishDate}</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input
                type="text"
                className="input input-bordered w-full "
                value={productName}
                disabled
              />
              <input
                type="text"
                className="input input-bordered w-full "
                value={`$${resalePrice}`}
                disabled
              />
            </div>

            <input
              type="text"
              className="input input-bordered w-full "
              value={user?.displayName && user.displayName}
              disabled
            />
            <input
              type="text"
              className="input input-bordered w-full "
              value={user?.email && user.email}
              disabled
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="input input-bordered w-full "
              required
            />
            <input
              type="text"
              name="location"
              placeholder="Meeting Location"
              className="input input-bordered w-full "
              required
            />
            <input className="btn btn-primary" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default BuyModal;
