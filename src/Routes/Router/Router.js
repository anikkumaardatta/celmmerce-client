import DashboardLayout from "../../layout/DashboardLayout";
import Main from "../../layout/Main";
import BrandCategory from "../../Pages/BrandCategory/BrandCategory";
import Brands from "../../Pages/components/HomeComponents/MobileBrands/Brands";
import AllBuyers from "../../Pages/Dashboard/AdminRol/AllBuyers/AllBuyers";
import AllSellers from "../../Pages/Dashboard/AdminRol/AllSellers/AllSellers";
import MyOrders from "../../Pages/Dashboard/BuyerRol/MyOrders/MyOrders";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import AddAProduct from "../../Pages/Dashboard/SellerRol/AddAProduct/AddAProduct";
import MyBuyers from "../../Pages/Dashboard/SellerRol/MyBuyers/MyBuyers";
import MyProducts from "../../Pages/Dashboard/SellerRol/MyProducts/MyProducts";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

const { createBrowserRouter } = require("react-router-dom");
const { default: Home } = require("../../Pages/Home/Home");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/brand/iPhone",
        element: (
          <PrivateRoutes>
            <BrandCategory></BrandCategory>
          </PrivateRoutes>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <DashboardLayout></DashboardLayout>
      </PrivateRoutes>
    ),
    children: [
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/dashboard/allsellers",
        element: <AllSellers></AllSellers>,
      },
      {
        path: "/dashboard/allbuyers",
        element: <AllBuyers></AllBuyers>,
      },
      {
        path: "/dashboard/addproduct",
        element: <AddAProduct></AddAProduct>,
      },
      {
        path: "/dashboard/myproducts",
        element: <MyProducts></MyProducts>,
      },
      {
        path: "/dashboard/mybuyers",
        element: <MyBuyers></MyBuyers>,
      },
      {
        path: "/dashboard/myorders",
        element: <MyOrders></MyOrders>,
      },
    ],
  },
]);

export default router;
