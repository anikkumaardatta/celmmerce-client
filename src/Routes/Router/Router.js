import Main from "../../layout/Main";
import BrandCategory from "../../Pages/BrandCategory/BrandCategory";
import Brands from "../../Pages/components/HomeComponents/MobileBrands/Brands";
import Dashboard from "../../Pages/Dashboard/Dashboard";
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
      {
        path: "/dashboard",
        element: (
          <PrivateRoutes>
            <Dashboard></Dashboard>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default router;
