import React, { useContext, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider/AuthProvider";
import { userType } from "../Shared/constant/userType";
import Navbar from "../Shared/Navbar/Navbar";

const DashboardLayout = () => {
  const { userDataInfo, setUserDataInfo } = useContext(AuthContext);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userDataInfo"));
    if (!userDataInfo) {
      setUserDataInfo(() => userData);
    }
    console.log("userDataInfo: ", userDataInfo);
    return () => {
      setUserDataInfo(null);
    };
  }, []);
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-nav-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content flex flex-col">
          <div className="max-w-7xl">
            <Outlet></Outlet>
          </div>
        </div>
        <div className="drawer-side ">
          <label
            htmlFor="dashboard-nav-drawer"
            className="drawer-overlay "
          ></label>
          <ul className="menu p-4 w-80 bg-violet-50 text-base-content">
            {/* ADMIN ROL */}
            {userDataInfo?.userType === userType.ADMIN && (
              <>
                <li className="my-1">
                  <Link to="/dashboard/allsellers">All Sellers</Link>
                </li>
                <li className="my-1">
                  <Link to="/dashboard/allbuyers">All Buyers</Link>
                </li>
              </>
            )}
            {userDataInfo?.userType === userType.SELLER && (
              <>
                <li className="my-1">
                  <Link to="/dashboard/addproduct">Add A Products</Link>
                </li>
                <li className="my-1">
                  <Link to="/dashboard/myproducts">My Products</Link>
                </li>
                <li className="my-1">
                  <Link to="/dashboard/mybuyers">My Buyers</Link>
                </li>
              </>
            )}
            {userDataInfo?.userType === userType.BUYER && (
              <>
                {/* BUYER ROL */}
                <li className="my-1">
                  <Link to="/dashboard/myorders">My Orders</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
