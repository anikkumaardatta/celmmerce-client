import React from "react";

const Banner = () => {
  return (
    <div
      className="hero min-h-fit"
      style={{
        backgroundImage: `url("https://eurasiannews.net/wp-content/uploads/2022/03/Mobile-Phones.jpg")`,
      }}
    >
      <div className="hero-overlay bg-black bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md my-20">
          <h1 className="mb-5 text-5xl font-bold">Celmmerce</h1>
          <p className="mb-5 text-xl">
            Welcome to the safest marketplace for sell & buy used mobile phones.{" "}
            <br />
            Find out the best deals of mobiles & smartphones.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
