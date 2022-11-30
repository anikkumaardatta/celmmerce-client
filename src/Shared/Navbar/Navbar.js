import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/celmmerce150x150.png";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then((result) => {
        const user = result.user;
      })
      .catch((err) => console.log(err));
  };
  const menuItems = (
    <>
      <li>
        <Link className="rounded-md px-8" to="/">
          Home
        </Link>
      </li>
      {user?.email && (
        <li>
          <Link className="rounded-md px-8" to="/dashboard">
            Dashboard
          </Link>
        </li>
      )}
    </>
  );

  return (
    <div className="bg-violet-100 sticky top-0 z-50">
      <div className="navbar max-w-6xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
              {user?.uid ? (
                <button
                  onClick={handleLogOut}
                  className="btn btn-outline btn-primary"
                >
                  Log out
                </button>
              ) : (
                <Link to="/login" className="btn btn-outline btn-primary">
                  Login
                </Link>
              )}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl text-p">
            <img src={logo} className="w-11" alt="" />
            Celmmerce
          </a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal p-0 mx-2">{menuItems}</ul>

          {user?.uid ? (
            <button
              onClick={handleLogOut}
              className="btn btn-outline btn-primary"
            >
              Log out
            </button>
          ) : (
            <Link to="/login" className="btn btn-outline btn-primary">
              Login
            </Link>
          )}
        </div>
        <div className="navbar-end lg:hidden">
          <label
            htmlFor="dashboard-nav-drawer"
            tabIndex={1}
            className="btn btn-ghost drawer-button lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
