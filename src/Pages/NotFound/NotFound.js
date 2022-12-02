import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/404.svg";

const NotFound = () => {
  return (
    <div className="hero py-20">
      <div className="hero-content max-w-6xl flex-col lg:flex-row">
        <img
          src={img}
          className=" md:max-w-none lg:max-w-md rounded-lg "
          alt=""
        />
        <div className="xs:text-center md:text-center lg:text-left">
          <h1 className="text-5xl font-bold text-secondary">
            404 | Page Not Found
          </h1>
          <p className="py-6 max-w-md">
            <h2 className="text-2xl">
              Oops! We were unable to find what you were looking for.
            </h2>
            The page you have requested cannot be found. Error code: Page Not
            Found
          </p>
          <Link to="/">
            <button className="btn btn-primary">Go to the home page</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
